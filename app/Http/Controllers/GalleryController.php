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

    public function videos(Request $request)
    {
        $videos = VideoResource::collection(
            $self = Video::query()
                ->latest()
                ->paginate(10)
                ->withQueryString()
        )->additional([
            'meta' => [
                'has_pages' => $self->hasPages(),
            ],
        ]);

        return inertia('gallery/video/index', [
            'videos' => fn () => $videos,
            'state' => $request->only('page'),
        ]);
    }

    public function videoShow($slug)
    {
        $video = Video::where('slug', $slug)->firstOrFail();
        return inertia('gallery/video/show', 
        [
            'video' => $video,
        ]);
    }
}
