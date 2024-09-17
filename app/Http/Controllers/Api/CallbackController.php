<?php

namespace App\Http\Controllers\Api;

use App\Models\Booking;

//import request
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Models\Payment;

class CallbackController extends Controller
{
    /**
     * __construct
     *
     * @return void
     */
    public function __construct()
    {
        // Set midtrans configuration
        \Midtrans\Config::$serverKey    = config('services.midtrans.serverKey');
        \Midtrans\Config::$isProduction = config('services.midtrans.isProduction');
        \Midtrans\Config::$isSanitized  = config('services.midtrans.isSanitized');
        \Midtrans\Config::$is3ds        = config('services.midtrans.is3ds');
    }

    /**
     * index
     *
     * @param  mixed $request
     * @return void
     */
    public function index(Request $request)
    {
        $payload      = $request->getContent();
        $notification = json_decode($payload);

        $validSignatureKey = hash("sha512", $notification->order_id . $notification->status_code . $notification->gross_amount . config('services.midtrans.serverKey'));

        if ($notification->signature_key != $validSignatureKey) {
            return response(['message' => 'Invalid signature'], 403);
        }

        $transaction  = $notification->transaction_status;
        $type         = $notification->payment_type;
        $orderId      = $notification->order_id;
        $fraud        = $notification->fraud_status;

        //data payment
        $payment = Payment::with('booking')->where('id', $orderId)->first();
        $booking = Booking::where('id', $payment->booking->id)->first();
        $remainingPayment = $booking->remaining_payment;

        if ($remainingPayment === 0) {
            $booking->status = 'completed';
            $booking->save();
        }

        if ($transaction == 'capture') {

            // For credit card transaction, we need to check whether transaction is challenge by FDS or not
            if ($type == 'credit_card') {

                if ($fraud == 'challenge') {

                    /**
                     *   update invoice to pending
                     */
                    $payment->status = 'pending';
                    $payment->save();
                } else {

                    /**
                     *   update invoice to success
                     */

                    $booking->status = 'completed';
                    $payment->status = 'success';
                    $payment->save();
                }
            }
        } elseif ($transaction == 'settlement') {

            /**
             *   update invoice to success
             */

            $booking->status = 'completed';
            $payment->status = 'success';
            $payment->save();
        } elseif ($transaction == 'pending') {


            /**
             *   update invoice to pending
             */

            $payment->status = 'pending';
            $payment->save();
        } elseif ($transaction == 'deny') {


            /**
             *   update invoice to failed
             */

            $payment->status = 'failed';
            $payment->save();
        } elseif ($transaction == 'expire') {


            /**
             *   update invoice to expired
             */

            $payment->status = 'expired';
            $payment->save();
        } elseif ($transaction == 'cancel') {

            /**
             *   update invoice to failed
             */

            $payment->status = 'cancel';
            $payment->save();
        }
    }
}
