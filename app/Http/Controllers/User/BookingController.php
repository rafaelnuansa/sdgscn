<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Payment;
use Illuminate\Http\Request;
class BookingController extends Controller
{

   

    public function index(Request $request)
    {

        $user = $request->user();
        $booking_pending = Booking::where('user_id', $user->id)->where('status', 'pending')->count();
        $payment_pending = Payment::where('user_id', $user->id)->where('status', 'pending')->count();
        $booking_completed = Booking::where('user_id', $user->id)->where('status', 'completed')->count();
        $payment_success = Booking::where('user_id', $user->id)->where('status', 'success')->count();

        if (!auth()->check()) {
            // Jika pengguna belum masuk, alihkan ke halaman masuk
            return redirect()->guest('login')->with('error', 'You need to login to access.');
        }
    
        $user = auth()->user();
        $bookings = Booking::with('package', 'package.category', 'payments')
            ->when($request->search, fn ($query, $value) => $query->where('invoice', 'like', '%' . $value . '%'))
            ->when($request->status, fn ($query, $value) => $query->where('status', $value))
            ->when($request->start_date, function ($query, $start_date) {
                $query->whereDate('created_at', '>=', $start_date);
            })
            ->when($request->end_date, function ($query, $end_date) {
                $query->whereDate('created_at', '<=', $end_date);
            })
            ->where('user_id', $user->id)
            ->orderBy('created_at', 'desc') // Urutkan berdasarkan tanggal dibuat, dengan yang terbaru di atas
            ->paginate(10);
    
        $bookings->each(function ($booking) {
            $booking->remaining_payment = $booking->remaining_payment;
        });
    
        return inertia('user/bookings/index', [
            'bookings' => $bookings,
            'user' => $user,
            'booking_pending' => $booking_pending,
            'booking_completed' => $booking_completed,
            'payment_pending' => $payment_pending,
            'payment_success' => $payment_success
        ]);
    }
    

    public function show($invoice)
    {
        try {
            if (!auth()->check()) {
                // If the user is not logged in, redirect to the login page
                flashMessage('Error', 'You need to login to access.');
                return redirect()->guest('login')->with('error', 'You need to login to access.');
            }

            $booking = Booking::with('package', 'package.category', 'payments', 'user')->where('invoice', $invoice)->firstOrFail();
        
            $remaining_payment = $booking->remaining_payment;
            // dd($remaining_payment);
            // Check if the authenticated user is the owner of the booking
            if ($booking->user_id !== auth()->id()) {
                flashMessage('Error', 'Kamu tidak diizinkan untuk mengakses booking ini.');
                return redirect()->route('bookings.index')->with('error', 'You are not authorized to view this booking.');
            } 

            return inertia('user/bookings/show', [
                'booking' => $booking,
                'remaining_payment' => $remaining_payment,
            ]);
        } catch (\Exception $e) {
            // Handle any exceptions that occur
            flashMessage('Error', 'An error occurred: ' . $e->getMessage());
            return redirect()->route('bookings.index')->with('error', 'An error occurred: ' . $e->getMessage());
        }
    }


    public function cancel($invoice)
    {

    }

}
