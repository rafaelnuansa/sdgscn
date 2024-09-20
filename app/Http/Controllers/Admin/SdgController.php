<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Sdg;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


class SdgController extends Controller
{

    public function index()
    {
        $sdgs = Sdg::latest()->paginate(10);
        return inertia('admin/sdgs/index', [
            'sdgs' => $sdgs
        ]);
    }

    public function create()
    {
        return inertia('admin/sdgs/create');
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                'image' => 'required|image|mimes:jpeg,jpg,png,webp|max:2048',
                'name' => 'required|string|max:255',
                'description' => 'string|nullable',
            ]);
    
            $image = $request->file('image');
            $image->storeAs('public/sdgs', $image->hashName());
    
            // Create sdg with slug
            Sdg::create([
                'image' => $image->hashName(),
                'name' => $request->name,
                'slug' => Str::slug($request->name), // Generate slug from name
                'description' => $request->description,
            ]);
    
            flashMessage('Success', 'Sdg created successfully.');
            return redirect()->route('admin.sdgs.index');
        } catch (QueryException $e) {
            flashMessage('error', 'Failed to create sdg: ' . $e->getMessage());
            return redirect()->back()->withInput();
        } catch (\Exception $e) {
            flashMessage('error', 'An error occurred: ' . $e->getMessage());
            return redirect()->back()->withInput();
        }
    }
    

    public function edit(Sdg $sdg)
    {
        return inertia('admin/sdgs/edit', [
            'sdg' => $sdg
        ]);
    }

    
    public function update(Request $request, Sdg $sdg)
    {
        $request->validate([
            'image'         => 'nullable|image|mimes:jpeg,jpg,png,webp|max:2048',
            'description'   => 'nullable',
            
            'content'   => 'required',
            'name'          => 'nullable|min:3',
        ]);
    
        // Check if image is uploaded
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $image->storeAs('public/sdgs', $image->hashName());
            Storage::delete('public/sdgs/'.$sdg->image);
            
            // Update sdg with new image and slug
            $sdg->update([
                'image'         => $image->hashName(),
                'name'          => $request->name,
                'slug'          => Str::slug($request->name), // Update slug based on new name
                'description'   => $request->description,
                'content'   => $request->content,
            ]);
        } else {
            // Update sdg without image but with slug
            $sdg->update([
                'name'          => $request->name,
                'slug'          => Str::slug($request->name), // Update slug even if no new image
                'description'   => $request->description,
                'content'   => $request->content,
            ]);
        }
    
        flashMessage('Success', 'Sdg updated successfully.');
        return redirect()->route('admin.sdgs.index');
    }
    

    public function destroy(Sdg $sdg)
    {
        $sdg->delete();
        Storage::delete('public/sdgs/'.$sdg->image);
        flashMessage('Success', 'Sdg deleted successfully.');
        return redirect()->route('admin.sdgs.index');
    }
}
