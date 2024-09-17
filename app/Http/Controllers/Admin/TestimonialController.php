<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class TestimonialController extends Controller
{
    public function index()
    {
        $testimonials = Testimonial::latest()->get();
        return Inertia::render('admin/testimonials/index', [
            'testimonials' => $testimonials
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/testimonials/create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name'          => 'required|string|max:255',
            'from'          => 'nullable|string|max:255',
            'description'   => 'required|string',
            'image'         => 'nullable|image|mimes:jpeg,jpg,png,webp|max:2048',
        ]);

        $image = $request->file('image');
        if ($image) {
            $image->storeAs('public/testimonials', $image->hashName());
        }

        Testimonial::create([
            'name'          => $request->name,
            'from'          => $request->from,
            'description'   => $request->description,
            'image'         => $image ? $image->hashName() : null,
        ]);

        flashMessage('success', 'Testimonial created successfully.');
        return redirect()->route('admin.testimonials.index');
    }

    public function edit(Testimonial $testimonial)
    {
        return Inertia::render('admin/testimonials/edit', [
            'testimonial' => $testimonial
        ]);
    }

    public function update(Request $request, Testimonial $testimonial)
    {
        $request->validate([
            'name'          => 'required|string|max:255',
            'from'          => 'nullable|string|max:255',
            'description'   => 'required|string',
            'image'         => 'nullable|image|mimes:jpeg,jpg,png,webp|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $image->storeAs('public/testimonials', $image->hashName());

            if ($testimonial->image) {
                Storage::delete('public/testimonials/' . $testimonial->image);
            }

            $testimonial->update([
                'name'          => $request->name,
                'from'          => $request->from,
                'description'   => $request->description,
                'image'         => $image->hashName(),
            ]);
        } else {
            $testimonial->update([
                'name'          => $request->name,
                'from'          => $request->from,
                'description'   => $request->description,
            ]);
        }

        flashMessage('success', 'Testimonial updated successfully.');
        return redirect()->route('admin.testimonials.index');
    }

    public function destroy(Testimonial $testimonial)
    {
        if ($testimonial->image) {
            Storage::delete('public/testimonials/' . $testimonial->image);
        }

        $testimonial->delete();
        flashMessage('success', 'Testimonial deleted successfully.');
        return redirect()->route('admin.testimonials.index');
    }
}
