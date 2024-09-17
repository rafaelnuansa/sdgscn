<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Mail\BookingNotificationMail;
use App\Models\Booking;
use App\Models\Category;
use App\Models\Package;
use App\Models\PackageItinerary;
use App\Models\PackageVideo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;


class PackageController extends Controller
{
    public function index(Request $request)
    {

        $packages = Package::with('category')->latest()->paginate(10);
        return inertia('packages/index', [
            'packages' => $packages,
        ]);
    }

    public function show($slug)
    {
        $paket = Package::with('category', 'hotels.images', 'images', 'itineraries.items')
            ->where('slug', $slug)
            ->firstOrFail();

        $videoPremium = PackageVideo::latest()->get();
        $itineraries = PackageItinerary::where('package_id', $paket->id)->with('items')->orderBy('day')->get();
        // Check if the user is authenticated and has a booking for this package
        $hasBooking = false;
        if (auth()->check()) {
            $user = auth()->user();
            $hasBooking = Booking::where('user_id', $user->id)
                ->where('package_id', $paket->id)
                ->whereIn('status', ['approved', 'completed'])
                ->exists();
        }

        return inertia('packages/show', [
            'paket' => $paket,
            'videoPremiums' => $videoPremium,
            'itineraries' => $itineraries,
            'hasBooking' => $hasBooking,
        ]);
    }

    public function category($slug)
    {
        // Cari kategori berdasarkan slug
        $category = Category::where('slug', $slug)->firstOrFail();
        // Cari paket berdasarkan kategori
        $packages = Package::with('category', 'hotels', 'images')
            ->where('category_id', $category->id)
            ->latest()
            ->paginate(10);
        return inertia('packages/category', [
            'category' => $category,
            'packages' => $packages,
        ]);
    }

    public function book(Request $request, $slug)
    {
        try {
            if (!auth()->check()) {
                flashMessage('Upss', 'Kamu harus login terlebih dahulu sebelum memesan paket', 'error');
                return redirect()->route('login');
            }

            $user = $request->user();
            if (!$user) {
                return redirect()->back()->with('error', 'User not found');
            }

            $request->validate([
                'qty' => 'required|integer|min:1',
            ]);

            $package = Package::where('slug', $slug)->first();
            if (!$package) {
                return redirect()->back()->with('error', 'Package not found');
            }

            // Periksa apakah pengguna telah membooking paket ini dan belum selesai
            $existingBooking = Booking::where('user_id', $user->id)
                ->where('package_id', $package->id)
                ->whereIn('status', ['pending', 'approved'])
                ->first();

            if ($existingBooking) {
                flashMessage('Booking', 'Kamu sudah memiliki booking untuk paket ini lanjutkan pada Menu booking.', 'warning');
                return redirect()->route('bookings.index');
            }

            $qty = $request->qty;
            $amount = $package->price * $qty;

            // Insert booking to database
            $booking = new Booking();
            $booking->invoice = 'INV' . Str::upper(Str::random(8));
            $booking->price = $package->price;
            $booking->qty = $qty;
            $booking->amount = $amount;
            $booking->package_id = $package->id;
            $booking->user_id = $user->id;
            $booking->save();

            if ($booking) {
                Mail::to($user->email)->send(new BookingNotificationMail($user->name, $user->email, $package->name, $amount, $booking->qty, $booking->invoice));
                flashMessage('Booking Success', 'Kamu berhasil booking ' . $package->name . ' silahkan cek pembayaran.', 'success');
                return redirect()->route('bookings.index')->with('success', 'Booking created successfully');
            }
        } catch (\Exception $e) {
            // Handle any exceptions that occur during the process
            flashMessage('Booking Failed', 'An error occurred: ' . $e->getMessage());
            return redirect()->back();
        }
    }

    public function search(Request $request)
    {
        if (!$request->has('search')) {
            return [];
        }

        return Package::query()
            ->select('id', 'name', 'slug', 'price', 'image')
            ->where('name', 'like', "%{$request->search}%")
            ->limit(20)
            ->get()
            ->map(fn ($package) => [
                'id' => $package->id,
                'name' => $package->name,
                'price' => $package->price,
                'image' => asset('images/' . $package->image),
                'href' => route('packages.show', $package->slug),
            ]);
    }
}
