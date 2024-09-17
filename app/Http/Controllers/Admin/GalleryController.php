<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class GalleryController extends Controller
{
    public function index()
    {
        $galleries = Gallery::with('album', 'user')->get();
        return view('admin.galleries.index', compact('galleries'));
    }

    public function create()
    {
        $albums = Album::all();
        $users = User::all();
        return view('admin.galleries.create', compact('albums', 'users'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'album_id' => 'required|exists:albums,id',
            'image' => 'required|string'
        ]);

        Gallery::create($request->all());

        return redirect()->route('admin.galleries.index')->with('success', 'Gallery created successfully.');
    }

    public function show(Gallery $gallery)
    {
        return view('admin.galleries.show', compact('gallery'));
    }

    public function edit(Gallery $gallery)
    {
        $albums = Album::all();
        $users = User::all();
        return view('admin.galleries.edit', compact('gallery', 'albums', 'users'));
    }

    public function update(Request $request, Gallery $gallery)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'album_id' => 'required|exists:albums,id',
            'image' => 'required|string'
        ]);

        $gallery->update($request->all());

        return redirect()->route('admin.galleries.index')->with('success', 'Gallery updated successfully.');
    }

    public function destroy(Gallery $gallery)
    {
        $gallery->delete();

        return redirect()->route('admin.galleries.index')->with('success', 'Gallery deleted successfully.');
    }
}
