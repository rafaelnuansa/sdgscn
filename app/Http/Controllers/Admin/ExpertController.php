<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ExpertController extends Controller
{
  
    
    public function index()
    {
        $experts = Expert::latest()->get();
        return inertia('admin/experts/index', [
            'experts' => $experts
        ]);
    }

    public function create()
    {
        return inertia('admin/experts/create');
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                'image' => 'required|image|mimes:jpeg,jpg,png,webp|max:2048',
                'name' => 'required|string|max:255',
            ]);
    
            $image = $request->file('image');
            $image->storeAs('public/experts', $image->hashName());
    
            // Create expert
            Expert::create([
                'image' => $image->hashName(),
                'name' => $request->name,
            ]);
    
            flashMessage('success', 'Expert created successfully.');
            return redirect()->route('admin.experts.index');
        } catch (QueryException $e) {
            // Jika terjadi kesalahan pada query database
            flashMessage('error', 'Failed to create expert: ' . $e->getMessage());
            return redirect()->back()->withInput();
        } catch (\Exception $e) {
            // Jika terjadi kesalahan umum
            flashMessage('error', 'An error occurred: ' . $e->getMessage());
            return redirect()->back()->withInput();
        }
    }

    public function edit(Expert $expert)
    {
        return inertia('admin/experts/edit', [
            'expert' => $expert
        ]);
    }

    public function update(Request $request, Expert $expert)
    {
        $request->validate([
            'image'         => 'nullable|image|mimes:jpeg,jpg,png,webp|max:2048',
            'name'         => 'nullable|min:3',
        ]);

        //check if image is uploaded
        if ($request->hasFile('image')) {
            //upload new image
            $image = $request->file('image');
            $image->storeAs('public/experts', $image->hashName());
            //delete old image
            Storage::delete('public/experts/'.$expert->image);
            //update expert with new image
            $expert->update([
                'image'         => $image->hashName(),
                'name'         => $request->name,
            ]);

        } else {
            //update expert without image
            $expert->update([
                'name'         => $request->name,
            ]);
        }
        flashMessage('success', 'Expert updated successfully.');
        return redirect()->route('admin.experts.index');
    }

    public function destroy(Expert $expert)
    {
        $expert->delete();
        Storage::delete('public/experts/'.$expert->image);
        flashMessage('success', 'Expert deleted successfully.');
        return redirect()->route('admin.experts.index');
    }
}
