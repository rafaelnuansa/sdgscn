<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index()
    {
        return redirect()->route('home');
    }

    public function show($slug)
    {
        // Find the page by slug
        $page = Page::where('slug', $slug)->firstOrFail();

        // Return a view with the page data
        return inertia(
            'pages/show',
            ['page' => $page]
        );
    }
}
