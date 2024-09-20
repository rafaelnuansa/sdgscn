<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::latest()->paginate(10);
        return inertia('articles/index', [
            'articles' => $articles,
        ]);
    }

    public function show($slug)
    {
        $article = Article::where('slug', $slug)->first();
        $recentPosts = Article::latest()
            ->take(10) // Batas artikel yang akan ditampilkan
            ->get();
        return inertia('articles/show', [
            'article' => $article,
            'recentPosts' => $recentPosts, // Postingan lainnya
        ]);
    }
}
