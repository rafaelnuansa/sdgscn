<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Payment;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $booking_pending = Booking::where('user_id', $user->id)->where('status', 'pending')->count();
        $payment_pending = Payment::where('user_id', $user->id)->where('status', 'pending')->count();
        $booking_completed = Booking::where('user_id', $user->id)->where('status', 'completed')->count();
        $payment_success = Booking::where('user_id', $user->id)->where('status', 'success')->count();
        return inertia(
            'user/dashboard/index',
            [
                'user' => $user,
                'booking_pending' => $booking_pending,
                'booking_completed' => $booking_completed,
                'payment_pending' => $payment_pending,
                'payment_success' => $payment_success
            ],
        );
    }
}
