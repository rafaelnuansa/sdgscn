<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Partner;
use App\Models\Sdg;
use App\Models\Slider;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $latestArticles = Article::latest()
        ->take(8)
        ->get();

        $ourSdgs = Sdg::all();
        $sliders = Slider::latest()->get();
        $partners = Partner::latest()->get();
        return inertia('home/index', [
            'latestArticles' => $latestArticles,
            'ourSdgs' => $ourSdgs,
            'sliders' => $sliders,
            'partners' => $partners,
        ]);
    }
}
