<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;

use App\Models\Booking;
use App\Models\Payment;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Midtrans\Snap;
use Midtrans\CoreApi;


class PaymentController extends Controller
{

    private $encodedServerKey;

    public function __construct()
    {
        // Set Midtrans configuration
        \Midtrans\Config::$serverKey = config('services.midtrans.serverKey');
        \Midtrans\Config::$isProduction = config('services.midtrans.isProduction');
        \Midtrans\Config::$isSanitized = config('services.midtrans.isSanitized');
        \Midtrans\Config::$is3ds = config('services.midtrans.is3ds');
        $this->encodedServerKey = base64_encode(config('services.midtrans.serverKey'));
    }

    public function index()
    {
        if (!auth()->check()) {
            return redirect()->guest('login')->with('error', 'Kamu harus login terlebih dahulu.');
        }
        $user = auth()->user();
        $payments = Payment::with('booking', 'booking.package')->where('user_id', $user->id)->where('status', 'pending')->latest()->paginate(10);
        return inertia('user/payments/index', [
            'payments' => $payments,
        ]);
    }


    public function show($id)
    {
        $payment = Payment::with('booking', 'booking.package')->where('id', $id)->first();
        return inertia('user/payments/show', [
            'payment' => $payment,
        ]);
    }

    public function store(Request $request)
    {
        if (!auth()->check()) {
            return redirect()->guest('login')->with('error', 'Kamu harus login terlebih dahulu.');
        }
        // Validate input data
        $request->validate([
            'booking_invoice' => 'required|exists:bookings,invoice',
            'amount' => 'required|integer|min:1',
            'payment_type' => 'required|in:full,down_payment,completion',
            'method' => 'required|in:online,offline',
        ]);

        try {
            DB::beginTransaction();
            $booking = Booking::with('user')->where('invoice', $request->booking_invoice)->firstOrFail();

            $pendingPayment = Payment::where('booking_id', $booking->id)
                ->where('status', 'pending')
                ->first();

            if ($pendingPayment) {
                return response()->json([
                    'success' => false,
                    'message' => 'Mohon selesaikan pembayaran sebelumnya.',
                    'payment_id' => $pendingPayment->id,
                ], 409);
            }

            // Check for successful payments
            $successfulPayments = Payment::where('booking_id', $booking->id)
                ->where('status', 'success')
                ->sum('amount');

            // Calculate remaining amount
            $remainingAmount = $booking->amount - $successfulPayments;

            if ($remainingAmount <= 0) {
                return response()->json([
                    'success' => false,
                    'message' => 'Payment is already complete.',
                ], 400);
            }

            if ($request->amount > $remainingAmount) {
                throw new \Exception('Jumlah melebihi total pembayaran. Jumlah yang tersisa untuk dibayar adalah ' . $remainingAmount . '.');
            }

            // Create a new payment
            $payment = new Payment();
            $payment->booking_id = $booking->id;
            $payment->amount = $request->amount;
            $payment->user_id = auth()->user()->id;
            $payment->method = $request->method;
            $payment->type = $request->payment_type;
            $payment->save();

            // Create Snap payload
            $payload = [
                'transaction_details' => [
                    'order_id' => $payment->id, // Use payment_id as order_id
                    'gross_amount' => $request->amount,
                ],
                'customer_details' => [
                    'first_name' => $booking->user->name,
                    'email' => $booking->user->email,
                ],
                'item_details' => [
                    [
                        'id' => $booking->id,
                        'price' => $request->amount,
                        'quantity' => 1,
                        'name' => $booking->package->name,
                    ],
                ],
            ];

            // Generate Snap token
            $snapToken = Snap::getSnapToken($payload);

            // Save the payment with Snap token details
            $payment->snap_token = $snapToken;
            $payment->status = 'pending';
            $payment->method = $request->method;
            $payment->save();

            // Commit transaction if no issues
            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Transaction created successfully, please proceed with the payment.',
                'snap_token' => $snapToken,
                'payment_id' => $payment->id,
                'status' => $payment->status,
            ]);
        } catch (\Exception $e) {
            // Rollback transaction if any error occurs
            DB::rollBack();
            // Handle error
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 500);
        }
    }
}
