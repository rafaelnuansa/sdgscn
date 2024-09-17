<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookingListResource;
use App\Models\Booking;
use App\Models\Hotel;
use App\Models\Package;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index()
    {
        // Dapatkan tanggal awal dan akhir bulan ini
        $startOfMonth = Carbon::now()->startOfMonth();
        $endOfMonth = Carbon::now()->endOfMonth();
        $packages_count = Package::count();
        $customer_count = User::where('is_admin', false)->count();
        $hotel_count = Hotel::count();
        $booking_count = Booking::whereBetween('created_at', [$startOfMonth, $endOfMonth])->count();

        $bookings = BookingListResource::collection(
            $self = Booking::query()
                ->with('package', 'user', 'payments', 'package.category')
                ->where('status', 'pending')
                ->latest()
                ->take(10)
                ->get());


        return inertia('admin/dashboard/index', [
            'packages_count' => $packages_count,
            'customer_count' => $customer_count,
            'hotel_count' => $hotel_count,
            'booking_count' => $booking_count,
            'bookings' => $bookings,
        ]);
    }
}
