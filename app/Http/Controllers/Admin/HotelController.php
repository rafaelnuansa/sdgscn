<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\HotelListResource;
use Illuminate\Http\Request;
use App\Models\Hotel;
use App\Models\HotelImage;
use Illuminate\Support\Facades\Storage;

class HotelController extends Controller
{
    public function index(Request $request)
    {
        $hotels = HotelListResource::collection(
            $self = Hotel::query()
                ->select(['id', 'name',  'stars', 'description', 'image', 'location', 'created_at'])
                ->when($request->search, fn ($query, $value) => $query->where('name', 'like', '%' . $value . '%'))
                ->latest()
                ->paginate(10)
                ->withQueryString()

        )->additional([
            'meta' => [
                'has_pages' => $self->hasPages(),
            ],
        ]);

        return inertia('admin/hotels/index', [
            'hotels' => fn () => $hotels,
            'state' => $request->only('page',  'search'),
        ]);
    }


    public function create()
    {
        return inertia('admin/hotels/create', [
            'page_data' => fn () => [
                'hotel' => fn () => new Hotel(),
            ],
            'page_meta' => [
                'title' => 'Create Hotel',
                'description' => 'Create a new hotel by filling out the form below.',
                'url' => route('admin.hotels.store'),
                'method' => 'post',
            ],
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'location' => 'required',
            'description' => 'required',
            'stars' => 'required|integer|min:1|max:5',
            'image' => 'required|image|mimes:jpeg,png,webp,jpg,gif,svg|max:2048',
        ]);

        $image = $request->file('image');
        $imageName = time() . '.' . $image->extension();
        $image->move(public_path('images'), $imageName);

        Hotel::create([
            'name' => $request->name,
            'location' => $request->location,
            'description' => $request->description,
            'stars' => $request->stars,
            'image' => $imageName,
        ]);

        flashMessage('Success', 'Hotel created successfully');
        return redirect()->route('admin.hotels.index');
    }

    public function edit(Hotel $hotel)
    {
        return inertia('admin/hotels/create', [
            'page_data' => fn () => [
                'hotel' => fn () => $hotel,
            ],
            'page_meta' => [
                'title' => 'Edit Hotel',
                'description' => "Edit the hotel titled '{$hotel->name}'.",
                'url' => route('admin.hotels.update', $hotel),
                'method' => 'put',
            ],
        ]);
    }

    public function update(Request $request, Hotel $hotel)
    {
        $request->validate([
            'name' => 'required',
            'location' => 'required',
            'description' => 'required',
            'stars' => 'required|integer|min:1|max:5',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->extension();
            $image->move(public_path('images'), $imageName);
            // Remove old image
            Storage::delete(public_path('images/' . $hotel->image));
            $hotel->image = $imageName;
        }

        $hotel->update([
            'name' => $request->name,
            'location' => $request->location,
            'description' => $request->description,
            'stars' => $request->stars,
        ]);

        return redirect()->route('admin.hotels.index')->with('success', 'Hotel updated successfully.');
    }

    public function destroy(Hotel $hotel)
    {
        try {
            $hotel->delete();
            flashMessage('Success', 'Hotel deleted successfully');
        } catch (\Exception $e) {
            flashMessage('Error', $e->getMessage());
        }

        return redirect()->route('admin.hotels.index');
    }


    public function restore($id)
    {
        $hotel = Hotel::onlyTrash()->where('id', $id);
        $hotel->restore();
        flashMessage('Restored', 'Data berhasil dikembalikan');
        return redirect()->back();
    }

    public function force($id)
    {
        $hotel = Hotel::onlyTrash()->where('id', $id);

        Storage::delete(public_path('images/' . $hotel->image));
        $hotel->forceDelete();
        flashMessage('Permanent Delete', 'Data dihapus secara permanen');
        return redirect()->back();
    }

    public function storeImages(Request $request, Hotel $hotel)
    {
        try {
            $request->validate([
                'images.*' => 'required|image|mimes:jpeg,webp,png,jpg,gif,svg|max:2048',
            ]);

        
            foreach ($request->file('images') as $image) {
                $imageName = time() . '_' . $image->getClientOriginalName();
                $image->storeAs('public/images', $imageName);
                // Menyimpan referensi gambar dalam database
                $hotel->images()->create(['image' => $imageName]);
            }

            flashMessage('Success', 'Package images uploaded successfully.');
            return redirect()->route('admin.hotels.gallery', $hotel);
        } catch (\Exception $e) {
            flashMessage('Error Uploading Images',  $e->getMessage(), 'error');
            return redirect()->back();
        }
    }


    public function deleteImage(Hotel $hotel, HotelImage $image)
    {
        try {
            Storage::delete('public/images/' . $image->image);
            $image->forceDelete();
            flashMessage('Deleted', 'Image deleted successfully');
        } catch (\Exception $e) {
            flashMessage('error', 'An error occurred while deleting the image: ' . $e->getMessage());
        }

        return redirect()->route('admin.hotels.gallery', $hotel->id);
    }

    public function restoreImage(Hotel $hotel, HotelImage $image)
    {
        $image->onlyTrashed()->restore();
        flashMessage('success', 'Image deleted successfully');
        return redirect()->back();
    }

    public function deleteImageForce(Hotel $hotel, HotelImage $image)
    {
        try {
            Storage::delete('public/images/' . $image->image);
            $image->forceDelete();
            flashMessage('Permanent Delete', 'Image deleted successfully');
        } catch (\Exception $e) {
            flashMessage('error', 'An error occurred while deleting the image: ' . $e->getMessage());
        }

        return redirect()->route('admin.hotels.gallery', $hotel->id);
    }

    public function gallery($id)
    {
        $hotel = Hotel::where('id', $id)->first();
        $images = HotelImage::where('hotel_id', $hotel->id)->latest()->get();
        return inertia('admin/hotels/galleries/index', [
            'images' => $images,
            'hotel' => $hotel
        ]);
    }
}
