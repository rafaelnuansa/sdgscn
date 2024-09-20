<?php

namespace App\Http\Controllers;

use App\Http\Resources\VideoResource;
use App\Models\Album;
use App\Models\Gallery;
use App\Models\Video;
use Illuminate\Http\Request;

class GalleryController extends Controller
{
    public function index()
    {
        $albums = Album::latest()->get();
        return inertia('gallery/index', [
            'albums' => $albums
        ]);
    }

    public function show($id)
    {
        $album = Album::where('id', $id)->firstOrFail();
        $galleries = Gallery::where('album_id', $id)->latest()->get();
        return inertia(
            'gallery/show',
            [
                'galleries' => $galleries,
                'album' => $album
            ]
        );
    }
}
