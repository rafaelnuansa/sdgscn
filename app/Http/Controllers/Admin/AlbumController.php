<?php
// app/Http/Controllers/Admin/AlbumController.php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Album;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class AlbumController extends Controller
{
    public function index()
    {
        $albums = Album::latest()->get();
        return inertia('admin/albums/index', [
            'albums' => $albums
        ]);
    }

    public function create()
    {
        return inertia('admin/albums/create');
    }

    public function store(Request $request)
    {
        // Validate form
        $request->validate([
            'image' => 'required|image|mimes:jpeg,jpg,png,webp|max:2048',
            'name' => 'required|min:5',
            'description' => 'required|min:10',
        ]);

        try {
            // Upload image
            $image = $request->file('image');
            $image->storeAs('public/albums', $image->hashName());

            // Create album instance
            $album = new Album();
            $album->image = $image->hashName();
            $album->name = $request->name;
            $album->description = $request->description;
            $album->slug = Str::slug($request->name);
            $album->save();

            flashMessage('Created', 'Album created successfully.');
            return redirect()->route('admin.albums.index');
        } catch (\Exception $e) {
            // Delete the uploaded image if album creation failed
            Storage::delete('public/albums/' . $image->hashName());

            flashMessage('Failed', $e->getMessage(), 'error');
            return redirect()->route('admin.albums.index');
        }
    }

    public function show($id)
    {
        $album = Album::with('galleries')->where('id', $id)->first();
        $galleries = Gallery::where('album_id', $album->id)->latest()->get();
        // dd($album);
        return inertia('admin/albums/show', [
            'album' => $album,
            'galleries' => $galleries
        ]);
    }

    public function edit(Album $album)
    {
        return inertia('admin/albums/edit', [
            'album' => $album
        ]);
    }

    public function update(Request $request, Album $album)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'image|mimes:jpeg,jpg,png,webp|max:2048',
        ]);

        try {
            // If a new image is uploaded
            if ($request->hasFile('image')) {
                // Delete the old image
                Storage::delete('public/albums/' . $album->image);

                // Upload new image
                $image = $request->file('image');
                $image->storeAs('public/albums', $image->hashName());

                // Update album details with new image
                $album->image = $image->hashName();
            }

            $album->name = $request->name;
            $album->description = $request->description;
            $album->slug = Str::slug($request->name);
            $album->save();

            flashMessage('Updated', 'Album updated successfully.');
            return redirect()->route('admin.albums.index');
        } catch (\Exception $e) {
            flashMessage('Failed', $e->getMessage(), 'error');
            return redirect()->route('admin.albums.index');
        }
    }

    public function destroy(Album $album)
    {
        try {
            // Delete the image associated with the album
            Storage::delete('public/albums' . $album->image);

            $album->delete();

            flashMessage('Success','Success Delete Albums', 'success');
            return redirect()->route('admin.albums.index');
        } catch (\Exception $e) {
            flashMessage('Failed', $e->getMessage(), 'error');
            return redirect()->route('admin.albums.index');
        }
    }

    public function storeImages(Request $request, Album $album)
    {
        try {
            $request->validate([
                'images.*' => 'required|image|mimes:jpeg,webp,png,jpg,gif|max:2048',
            ]);


            foreach ($request->file('images') as $image) {
                $imageName = time() . '_' . $image->getClientOriginalName();
                $image->storeAs('public/albums', $imageName);
                // Menyimpan referensi gambar dalam database
                $album->images()->create(['image' => $imageName]);
            }

            flashMessage('Success', 'Package images uploaded successfully.');
            return redirect()->route('admin.albums.show', $album);
        } catch (\Exception $e) {
            flashMessage('Error Uploading Images',  $e->getMessage(), 'error');
            return redirect()->back();
        }
    }


    public function deleteImage($galleryId)
    {
        try {
            $gallery = Gallery::where('id', $galleryId)->first();
            Storage::delete('public/albums/' . $gallery->image);
            $gallery->delete();
            flashMessage('Deleted', 'Image deleted successfully');
            return redirect()->back();
        } catch (\Exception $e) {
            flashMessage('error', 'An error occurred while deleting the image: ' . $e->getMessage());
            return redirect()->back();
        }
    }
}
