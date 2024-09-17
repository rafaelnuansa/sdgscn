<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\HotelListResource;
use App\Http\Resources\PackageImageListResource;
use App\Http\Resources\PackageListResource;
use App\Http\Resources\PackageVideoResource;
use Illuminate\Http\Request;
use App\Models\Package;
use App\Models\PackageHotel;
use App\Models\Category;
use App\Models\Hotel;
use App\Models\PackageImage;
use App\Models\PackageItinerary;
use App\Models\PackageItineraryItem;
use App\Models\PackageVideo;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class PackageController extends Controller
{
    public function index(Request $request)
    {
        $packages = PackageListResource::collection(
            $self = Package::query()
                ->select(['id', 'category_id', 'name', 'slug', 'rate', 'day', 'image', 'price', 'created_at'])
                ->with([
                    'category:id,name,slug',
                ])
                ->withCount('hotels', 'itineraries')
                ->when($request->search, fn ($query, $value) => $query->where('name', 'like', '%' . $value . '%'))
                
                ->when($request->category, function ($query, $value) {
                    $slug = Category::where('slug', $value)->value('slug');
                    return $query->whereHas('category', function ($query) use ($slug) {
                        $query->where('slug', $slug);
                    });
                })

                ->when($request->onlyTrashed, fn ($query) => $query->onlyTrashed())
                ->latest()
                ->paginate(10)
                ->withQueryString()

        )->additional([
            'meta' => [
                'has_pages' => $self->hasPages(),
            ],
        ]);

        $categories = Category::all();

        return inertia('admin/packages/index', [
            'packages' => fn () => $packages,
            'categories' => $categories,
            'state' => $request->only('page', 'category', 'search', 'onlyTrashed'),
        ]);
    }



    public function create()
    {
        return inertia('admin/packages/create', [
            'page_data' => fn () => [
                'categories' => fn () => Category::toSelectArray(),
                'pkg' => fn () => new Package,
            ],
            'page_meta' => [
                'title' => 'Create Package',
                'description' => 'Create a new package by filling out the form below.',
                'url' => route('admin.packages.store'),
                'method' => 'post',
            ],
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
            'price' => 'required|numeric',
            'day' => 'required|integer',
            'rate' => 'required|integer',
            'minimum_dp_percent' => 'required|integer',
            'description' => 'nullable',
            'content' => 'nullable',
            'category_id' => 'required|exists:categories,id',
        ]);

        $image = $request->file('image');
        $imageName = time() . '.' . $image->extension();
        $image->move(public_path('images'), $imageName);

        $package = new Package();
        $package->name = $request->name;
        $package->slug = Str::slug($request->name);
        $package->image = $imageName;
        $package->minimum_dp_percent = $request->minimum_dp_percent;
        $package->price = $request->price;
        $package->day = $request->day;
        $package->rate = $request->rate;
        $package->description = $request->description;
        $package->content = $request->content;
        $package->category_id = $request->category_id;
        $package->save();
        flashMessage('success', 'Package created successfully.');
        return redirect()->route('admin.packages.index');
    }

    public function edit(Package $package)
    {
        return inertia('admin/packages/create', [
            'page_data' => fn () => [
                'categories' => fn () => Category::toSelectArray(),
                'pkg' => fn () => $package->load('category:id,name'),
            ],
            'page_meta' => [
                'title' => 'Edit Packages',
                'description' => "Edit the package titled '{$package->name}'.",
                'url' => route('admin.packages.update', $package),
                'method' => 'put',
            ],
        ]);
    }


    public function update(Request $request, Package $package)
    {
        $request->validate([
            'name' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
            'price' => 'required|numeric',
            'day' => 'required|integer',
            'minimum_dp_percent' => 'required|integer',
            'rate' => 'required|integer',
            'description' => 'nullable',
            'content' => 'nullable',
            'category_id' => 'required|exists:categories,id',
        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->extension();
            $image->move(public_path('images'), $imageName);
            $package->image = $imageName;
        }

        $package->name = $request->name;
        $package->slug = Str::slug($request->name); // Menggunakan Str::slug() untuk membuat slug dari nama paket
        $package->price = $request->price;
        $package->minimum_dp_percent = $request->minimum_dp_percent;
        $package->day = $request->day;
        $package->rate = $request->rate;
        $package->description = $request->description;
        $package->content = $request->content;
        $package->category_id = $request->category_id;
        $package->save();
        flashMessage('success', 'Package updated successfully.');
        return redirect()->route('admin.packages.index');
    }


    public function destroy(Package $package)
    {
        $package->delete();
        flashMessage('success', 'Package restored successfully.');
    }

    public function restore($id)
    {
        try {

            $package = Package::onlyTrashed()->where('id', $id);
            $package->restore();
            flashMessage('success', 'Package restored successfully.');
        } catch (QueryException $e) {
            flashMessage('error', 'Failed to restore package.');
        }

        return redirect()->back();
    }

    public function forceDelete($id)
    {
        $package = Package::onlyTrashed()->where('id', $id);
        $package->forceDelete();
        flashMessage('Permanent Deleted', 'Package Deleted Permanent You can`t Restore.');
    }

    public function manageHotels(Request $request, Package $package)
    {
        $hotels = HotelListResource::collection($self = $package->hotels()
            ->withPivot('night')
            ->when($request->onlyTrashed, fn ($query) => $query->onlyTrashed())

            ->latest()
            ->paginate(10))
            ->additional([
                'meta' => ['has_pages' => $self->hasPages()],
            ]);

        return inertia('admin/packages/hotels/list', [
            'hotels' => fn () => $hotels,
            'package_id' => $package->id,
            'page_data' => fn () => [
                'hotels' => fn () => new PackageHotel(),
            ],
            'available_hotels' => Hotel::whereNotIn('id', $package->hotels()->pluck('hotel_id'))->get(),
            'page_meta' => [
                'title' => $package->name,
                'description' => "Semua hotel di {$package->name}.",
            ],
            'state' => $request->only('onlyTrashed'),
        ]);
    }


    public function addHotel(Request $request, Package $package)
    {
        try {
            // Validasi hotel dan night tidak null
            $request->validate([
                'hotels.*.hotel_id' => 'required',
                'hotels.*.night' => 'required|numeric',
            ]);

            // Iterasi melalui setiap hotel yang dipilih
            foreach ($request->hotels as $hotel) {
                // Cek apakah hotel sudah ada di dalam paket
                $existingHotel = $package->hotels()->where('hotel_id', $hotel['hotel_id'])->first();

                // Jika hotel sudah ada di dalam paket
                if ($existingHotel) {
                    // Update jumlah malam (night)
                    $existingHotel->pivot->night = $hotel['night'];
                    $existingHotel->pivot->save();
                    flashMessage('Berhasil', 'Night updated successfully.');
                } else {
                    $uuid = Str::uuid()->toString();
                    // Tambahkan hotel ke dalam paket
                    // Tambahkan hotel ke dalam paket dengan UUID
                    $package->hotels()->attach($hotel['hotel_id'], [
                        'id' => $uuid,
                        'night' => $hotel['night'],
                    ]);
                    flashMessage('Berhasil', 'Hotel added to package successfully.');
                }
            }
        } catch (\Exception $e) {
            // Tangani error dan tampilkan pesan error
            flashMessage('Gagal', 'Terjadi kesalahan saat menambahkan hotel ke dalam paket: ' . $e->getMessage());
            return redirect()->back()->withInput();
        }

        return redirect()->back();
    }


    public function editHotel(Package $package, Hotel $hotel)
    {
        $hotel = $package->hotels()->where('hotel_id', $hotel->id)->firstOrFail();
        $hotel->pivot->update(['night' => request()->input('night')]);
        flashMessage('Berhasil', 'Hotel di paket berhasil diubah.');
        return redirect()->route('admin.packages.hotels.index', $package);
    }

    // Method untuk menghapus hotel dari paket
    public function removeHotel(Package $package, Hotel $hotel)
    {
        $package->hotels()->detach($hotel->id);
        flashMessage('success', 'Hotel removed from package successfully.');
        return redirect()->route('admin.packages.hotels.index', $package);
    }


    public function gallery(Package $package, Request $request)
    {

        $packageImages = PackageImageListResource::collection(
            $self = PackageImage::query()
                ->when($request->onlyTrashed, fn ($query) => $query->onlyTrashed())
                ->latest()->get()
        );

        return inertia('admin/packages/galleries/index', [
            'images' => fn () => $packageImages,
            'package' => $package,
            'state' => $request->only('onlyTrashed'),
        ]);
    }

    public function storePackageImages(Request $request, Package $package)
    {
        try {
            $request->validate([
                'images.*' => 'required|image|mimes:jpeg,webp,png,jpg,gif,svg|max:2048',
            ]);

            // Mengunggah dan menyimpan setiap gambar
            foreach ($request->file('images') as $image) {
                $imageName = time() . '_' . $image->getClientOriginalName();
                $image->storeAs('public/images', $imageName);
                $package->images()->create(['image' => $imageName]);
            }

            flashMessage('Success', 'Package images uploaded successfully.');
            return redirect()->back();
        } catch (\Exception $e) {
            flashMessage('Error Uploading Images',  $e->getMessage(), 'error');
            return redirect()->back();
        }
    }

    public function deleteImage(Package $package, PackageImage $image)
    {
        try {
            Storage::delete('public/images/' . $image->image);
            $image->forceDelete();
            // $image->delete();

            flashMessage('success', 'Image deleted successfully');
        } catch (\Exception $e) {
            flashMessage('error', 'An error occurred while deleting the image: ' . $e->getMessage());
        }

        return redirect()->route('admin.packages.galleries.index', $package->id);
    }

  

    public function restoreImage(Package $package, PackageImage $image){

        try {
            $image->restore();
            flashMessage('success', 'Image deleted successfully');
        } catch (\Exception $e) {
            flashMessage('error', 'An error occurred while deleting the image: ' . $e->getMessage());
        }

        return redirect()->route('admin.packages.galleries.index', $package->id);
    }


    // Metode untuk menampilkan daftar itinerary dalam suatu package
    public function itineraries(Package $package)
    {
             $itineraries = PackageItinerary::where('package_id', $package->id)->withCount('items')->with('items')->orderBy('day')->get();
        
        return inertia('admin/packages/itineraries/index', [
            'itineraries' => $itineraries,
            'package' => $package,
        ]);
    }

    // Metode untuk menampilkan form pembuatan itinerary baru
    public function createItinerary(Package $package)
    {
        return inertia('admin/packages/itineraries/create', [
            'package' => $package,
        ]);
    }

    // Metode untuk menyimpan itinerary baru
    public function storeItinerary(Request $request, Package $package)
    {
        $request->validate([
            'day' => 'required|string',
            'description' => 'required|string',
        ]);

        $package->itineraries()->create($request->all());

        flashMessage('success', 'Itinerary created successfully.');
        return redirect()->route('admin.packages.itineraries.index', $package);
    }

    // Metode untuk menampilkan form edit itinerary
    public function editItinerary(Package $package, PackageItinerary $itinerary)
    {
        return inertia('admin/packages/itineraries/edit', [
            'package' => $package,
            'itinerary' => $itinerary,
        ]);
    }

    // Metode untuk mengupdate itinerary
    public function updateItinerary(Request $request, Package $package, PackageItinerary $itinerary)
    {
        $request->validate([
            'day' => 'required|string',
            'description' => 'required|string',
        ]);

        $itinerary->update($request->all());

        flashMessage('success', 'Itinerary updated successfully.');
        return redirect()->route('admin.packages.itineraries.index', $package);
    }

    // Metode untuk menghapus itinerary
    public function destroyItinerary(Package $package, PackageItinerary $itinerary)
    {
        $itinerary->delete();

        flashMessage('success', 'Itinerary deleted successfully.');
        return redirect()->route('admin.packages.itineraries.index', $package);
    }

    // Metode untuk menampilkan daftar item dalam itinerary
    public function itineraryItems(Package $package, PackageItinerary $itinerary)
    {
        $items = $itinerary->items()->latest()->paginate(10);
        return inertia('admin/packages/itineraries/items/index', [
            'items' => $items,
            'package' => $package,
            'itinerary' => $itinerary,
        ]);
    }

    // Metode untuk menampilkan form pembuatan item baru dalam itinerary
    public function createItineraryItem(Package $package, PackageItinerary $itinerary)
    {
        return inertia('admin/packages/itineraries/items/create', [
            'package' => $package,
            'itinerary' => $itinerary,
        ]);
    }

    // Metode untuk menyimpan item baru dalam itinerary
    public function storeItineraryItem(Request $request, Package $package, PackageItinerary $itinerary)
    {
        $request->validate([
            'description' => 'required|string',
        ]);

        $itinerary->items()->create($request->all());

        flashMessage('success', 'Itinerary item created successfully.');
        return redirect()->route('admin.packages.itineraries.items.index', [$package, $itinerary]);
    }

    // Metode untuk menampilkan form edit item dalam itinerary
    public function editItineraryItem(Package $package, PackageItinerary $itinerary, PackageItineraryItem $item)
    {
        return inertia('admin/packages/itineraries/items/edit', [
            'package' => $package,
            'itinerary' => $itinerary,
            'item' => $item,
        ]);
    }

    // Metode untuk mengupdate item dalam itinerary
    public function updateItineraryItem(Request $request, Package $package, PackageItinerary $itinerary, PackageItineraryItem $item)
    {
        $request->validate([
            'description' => 'required|string',
        ]);

        $item->update($request->all());

        flashMessage('success', 'Itinerary item updated successfully.');
        return redirect()->route('admin.packages.itineraries.items.index', [$package, $itinerary]);
    }

    // Metode untuk menghapus item dalam itinerary
    public function destroyItineraryItem(Package $package, PackageItinerary $itinerary, PackageItineraryItem $item)
    {
        $item->delete();

        flashMessage('success', 'Itinerary item deleted successfully.');
        return redirect()->route('admin.packages.itineraries.items.index', [$package, $itinerary]);
    }


    public function videos(Package $package, Request $request)
    {
        $videos = PackageVideoResource::collection(
            $self = PackageVideo::query()
                ->when($request->search, fn ($query, $value) => $query->where('name', 'like', '%' . $value . '%'))
                ->latest()
                ->paginate(10)
                ->withQueryString()
        )->additional([
            'meta' => [
                'has_pages' => $self->hasPages(),
            ],
        ]);

        $package = Package::first();

        return inertia('admin/packages/videos/index', [
            'videos' => fn () => $videos,
            'main_package' => $package,
            'state' => $request->only('page'),
        ]);
    }


    // Menampilkan form pembuatan video baru
    // public function createVideo(Package $package)
    // {
    //     return inertia('admin/packages/videos/create', [
    //         'package' => $package,
    //     ]);
    // }

    public function createVideo(Package $package)
    {
            return inertia('admin/packages/videos/create', [
            'page_data' => fn () => [
                'video' => fn () => new PackageVideo(),
                'mainPackage' => $package,
            ],
            'page_meta' => [
                'title' => 'Upload Video',
                'description' => 'Create video for ' . $package->name,
                'url' => route('admin.packages.videos.store', $package),
                'method' => 'post',
            ],
        ]);
    }

    // Menyimpan video baru
    public function storeVideo(Request $request, Package $package)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'video' => 'required|file|mimes:mp4,mkv,avi|max:20480', // max 20MB
        ]);

        $video = $request->file('video');
        $videoExtension = $video->getClientOriginalExtension();
        $videoHashName = Str::random(40) . '.' . $videoExtension;
        $video->storeAs('public/videos', $videoHashName);
    
        $package->videos()->create([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'video' => $videoHashName,
        ]);

        flashMessage('success', 'Video created successfully.');
        return redirect()->route('admin.packages.videos.index', $package);
    }

    // Menampilkan form edit video
    // public function editVideo(Package $package, PackageVideo $video)
    // {
    //     return inertia('admin/packages/videos/edit', [
    //         'package' => $package,
    //         'video' => $video,
    //     ]);
    // }

    public function editVideo(Package $package, PackageVideo $video)
    {
        return inertia('admin/packages/videos/create', [
            'page_data' => fn () => [
                'video' => fn () => $video,
                'mainPackage' => $package
            ],
            'page_meta' => [
                'title' => 'Edit Package',
                'description' => "Edit the package video '{$package->name}'.",
                'url' => route('admin.packages.videos.update', [$package, $video]),
                'method' => 'put',
            ],
        ]);
    }

    // Mengupdate video
    public function updateVideo(Request $request, Package $package, PackageVideo $video)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'video' => 'nullable|file|mimes:mp4,mkv,avi|max:20480', // max 20MB
        ]);

        if ($request->hasFile('video')) {
            Storage::delete('public/videos/' . $video->video);
            $newVideo = $request->file('video');
            $videoName = time() . '_' . $newVideo->getClientOriginalName();
            $newVideo->storeAs('public/videos', $videoName);
            $video->video = $videoName;
        }

        $video->title = $request->title;
        $video->slug = Str::slug($request->title);
        $video->save();

        flashMessage('success', 'Video updated successfully.');
        return redirect()->route('admin.packages.videos.index', $package);
    }

    // Menghapus video
    public function destroyVideo(Package $package, PackageVideo $video)
    {
        Storage::delete('public/videos/' . $video->video);
        $video->delete();

        flashMessage('success', 'Video deleted successfully.');
        return redirect()->route('admin.packages.videos.index', $package);
    }
}
