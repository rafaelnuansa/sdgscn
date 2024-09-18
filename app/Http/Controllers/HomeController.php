<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Partner;
use App\Models\Slider;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        // Ambil semua HomeContent yang aktif

        // Inisialisasi array untuk menyimpan semua package dari HomeContent yang aktif
        $activePackages = [];

        // Ambil paket terbaru
   
        $latestArticles = Article::latest()
        ->take(8)
        ->get();

        $sliders = Slider::latest()->get();
        $partners = Partner::latest()->get();
        return inertia('home/index', [
            'latestArticles' => $latestArticles,
            'sliders' => $sliders,
            'partners' => $partners,
        ]);
    }
}
