<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\HomeContent;
use App\Models\Package;
use App\Models\Partner;
use App\Models\Slider;
use App\Models\Testimonial;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        // Ambil semua HomeContent yang aktif
        $activeHomeContents = HomeContent::where('is_active', true)->get();

        // Inisialisasi array untuk menyimpan semua package dari HomeContent yang aktif
        $activePackages = [];

        // Loop melalui setiap HomeContent yang aktif
        foreach ($activeHomeContents as $homeContent) {
            // Ambil paket dari HomeContent saat ini dengan eager loading pada kategori
            $packages = Package::with('category')
                ->where('category_id', $homeContent->package_category_id)
                ->orderBy($homeContent->sort_column, $homeContent->sort_order)
                ->get();

            // Periksa apakah ada paket yang ditemukan dan ambil nama kategori
            if ($packages->isNotEmpty()) {
                $category = $packages->first()->category;
                $categoryName = $category->name;
                $categorySlug = $category->slug;
                $activePackages[$homeContent->package_category_id] = [
                    'name' => $categoryName,
                    'slug' => $categorySlug,
                    'packages' => $packages
                ];
            }
        }

        // Ambil paket terbaru
        $latestPackages = Package::with('category')->latest()->take(4)->get();
        $threeStarPackages = Package::with('category')
            ->where('rate', 3)
            ->orderBy('price', 'desc') // Order by price descending
            ->latest()
            ->take(8)
            ->get();

        $fourStarPackages = Package::with('category')
            ->where('rate', 4)
            ->orderBy('price', 'desc') // Order by price descending
            ->latest()
            ->take(8)
            ->get();

        $fiveStarPackages = Package::with('category')
            ->where('rate', 5)
            ->orderBy('price', 'desc') // Order by price descending
            ->latest()
            ->take(8)
            ->get();



        $latestArticles = Article::latest()
        ->take(8)
        ->get();

        $sliders = Slider::latest()->get();
        $partners = Partner::latest()->get();
        $testimonials = Testimonial::latest()->get();
        return inertia('home/index', [
            'latestPackages' => $latestPackages,
            'latestArticles' => $latestArticles,
            'activePackages' => $activePackages,
            'sliders' => $sliders,
            'partners' => $partners,
            'testimonials' => $testimonials,
            'threeStarPackages' => $threeStarPackages,
            'fourStarPackages' => $fourStarPackages,
            'fiveStarPackages' => $fiveStarPackages,
        ]);
    }
}
