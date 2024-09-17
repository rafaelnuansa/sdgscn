<?php 

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Slider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SliderController extends Controller
{
    public function index()
    {
        $sliders = Slider::latest()->get();
        return inertia('admin/sliders/index', [
            'sliders' => $sliders
        ]);
    }

    public function create()
    {
        return inertia('admin/sliders/create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'image'         => 'required|image|mimes:jpeg,jpg,png,webp|max:2048',
            'title' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'url' => 'nullable|string|max:255',
        ]);

        $image = $request->file('image');
        $image->storeAs('public/sliders', $image->hashName());

        //create slider
        Slider::create([
            'image'         => $image->hashName(),
            'title'         => $request->title,
            'description'   => $request->description,
            'url'           => $request->url
        ]);

        flashMessage('success', 'Slider created successfully.');
        return redirect()->route('admin.sliders.index');
    }

    public function edit(Slider $slider)
    {
        return inertia('admin/sliders/edit', [
            'slider' => $slider
        ]);
    }

    public function update(Request $request, Slider $slider)
    {
        $request->validate([
            'image'         => 'nullable|image|mimes:jpeg,jpg,png,webp|max:2048',
            'title'         => 'nullable|min:5',
            'description'   => 'nullable|min:10',
            'url'           => 'nullable',
        ]);

        //check if image is uploaded
        if ($request->hasFile('image')) {
            //upload new image
            $image = $request->file('image');
            $image->storeAs('public/sliders', $image->hashName());

            //delete old image
            Storage::delete('public/sliders/'.$slider->image);

            //update slider with new image
            $slider->update([
                'image'         => $image->hashName(),
                'title'         => $request->title,
                'description'   => $request->description,
                'url'           => $request->url,
            ]);

        } else {
            //update slider without image
            $slider->update([
                'title'         => $request->title,
                'description'   => $request->description,
                'url'           => $request->url,
            ]);
        }
        flashMessage('success', 'Slider updated successfully.');
        return redirect()->route('admin.sliders.index');
    }

    public function destroy(Slider $slider)
    {
        $slider->delete();
        flashMessage('success', 'Slider deleted successfully.');

        return redirect()->route('admin.sliders.index');
    }
}
