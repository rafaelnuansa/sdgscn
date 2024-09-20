<?php

namespace App\Http\Controllers;

use App\Models\Sdg;
use Illuminate\Http\Request;

class SdgController extends Controller
{
    public function index()
    {
        $sdgs = Sdg::latest()->paginate(10);
        return inertia('sdgs/index', [
            'sdgs' => $sdgs,
        ]);
    }

    public function show($slug)
    {
        $sdg = Sdg::where('slug', $slug)->first();
        $recentPosts = Sdg::latest()
            ->take(10) // Batas artikel yang akan ditampilkan
            ->get();
        return inertia('sdgs/show', [
            'sdg' => $sdg,
            'recentPosts' => $recentPosts, // Postingan lainnya
        ]);
    }


    public function research($sdgSlug)
    {
        // Get the SDG based on the slug
        $sdg = Sdg::where('slug', $sdgSlug)->firstOrFail();
    
        // Retrieve all research related to this SDG
        $researches = $sdg->researches()->latest()->paginate(10);
    
        return inertia('sdgs/research', [
            'sdg' => $sdg,
            'researches' => $researches,
        ]);
    }
    

    public function publication($sdgSlug)
    {
        // Get the SDG based on the slug
        $sdg = Sdg::where('slug', $sdgSlug)->firstOrFail();
    
        // Retrieve all publications related to this SDG
        $publications = $sdg->publications()->latest()->paginate(10);
    
        return inertia('sdgs/publication', [
            'sdg' => $sdg,
            'publications' => $publications,
        ]);
    }
    
}
