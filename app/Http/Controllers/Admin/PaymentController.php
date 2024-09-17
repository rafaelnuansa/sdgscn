<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\PaymentListResource;
use App\Models\Payment;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function index(Request $request)
    {
        $payments = PaymentListResource::collection(
            $self = Payment::query()
                ->with('booking', 'booking.package')
                ->when($request->search, function ($query, $value) {
                    // Join the bookings table to filter payments based on the invoice attribute in bookings
                    $query->whereHas('booking', function ($bookingQuery) use ($value) {
                        $bookingQuery->where('invoice', 'like', '%' . $value . '%');
                    });
                })
                ->when($request->status, fn ($query, $value) => $query->where('status', $value))
                ->when($request->start_date, fn ($query, $value) => $query->whereDate('created_at', '>=', $value))
                ->when($request->end_date, fn ($query, $value) => $query->whereDate('created_at', '<=', $value))
                ->latest()
                ->paginate(10)
                ->withQueryString()
        )->additional([
            'meta' => [
                'has_pages' => $self->hasPages(),
            ],
        ]);

        return inertia('admin/payments/index', [
            'payments' => $payments,
            'state' => $request->only('page', 'status', 'search', 'start_date', 'end_date'),
        ]);
    }

    public function show(Request $request, Payment $payment)
    {

        return $payment;
    }


    public function change_status(Request $request, Payment $payment)
    {
        try {
            // Validasi input
            $request->validate([
                'status' => 'required|string|in:success,cancel,expired,failed,pending', // Ganti dengan status yang valid untuk aplikasi Anda
            ]);

            if (!$payment) {
                flashMessage('Not found', 'Tidak ditemukan.', 'warning');
                return redirect()->back();
            }

            // Ubah status booking
            $payment->status = $request->status;
            $payment->save();

            flashMessage('Status Changed', 'Status payment berhasil diubah menjadi ' . $request->status);
            return redirect()->back();
        } catch (\Exception $e) {
            // Menangani kesalahan umum
            flashMessage('Error', 'Terjadi kesalahan: ' . $e->getMessage(), 'error');
        }

        return redirect()->back();
    }
}
