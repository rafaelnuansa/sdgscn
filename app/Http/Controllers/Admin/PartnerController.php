<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Partner;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PartnerController extends Controller
{
    
    public function index()
    {
        $partners = Partner::latest()->get();
        return inertia('admin/partners/index', [
            'partners' => $partners
        ]);
    }

    public function create()
    {
        return inertia('admin/partners/create');
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                'image' => 'required|image|mimes:jpeg,jpg,png,webp|max:2048',
                'name' => 'required|string|max:255',
            ]);
    
            $image = $request->file('image');
            $image->storeAs('public/partners', $image->hashName());
    
            // Create partner
            Partner::create([
                'image' => $image->hashName(),
                'name' => $request->name,
            ]);
    
            flashMessage('success', 'Partner created successfully.');
            return redirect()->route('admin.partners.index');
        } catch (QueryException $e) {
            // Jika terjadi kesalahan pada query database
            flashMessage('error', 'Failed to create partner: ' . $e->getMessage());
            return redirect()->back()->withInput();
        } catch (\Exception $e) {
            // Jika terjadi kesalahan umum
            flashMessage('error', 'An error occurred: ' . $e->getMessage());
            return redirect()->back()->withInput();
        }
    }

    public function edit(Partner $partner)
    {
        return inertia('admin/partners/edit', [
            'partner' => $partner
        ]);
    }

    public function update(Request $request, Partner $partner)
    {
        $request->validate([
            'image'         => 'nullable|image|mimes:jpeg,jpg,png,webp|max:2048',
            'name'         => 'nullable|min:3',
        ]);

        //check if image is uploaded
        if ($request->hasFile('image')) {
            //upload new image
            $image = $request->file('image');
            $image->storeAs('public/partners', $image->hashName());
            //delete old image
            Storage::delete('public/partners/'.$partner->image);
            //update partner with new image
            $partner->update([
                'image'         => $image->hashName(),
                'name'         => $request->name,
            ]);

        } else {
            //update partner without image
            $partner->update([
                'name'         => $request->name,
            ]);
        }
        flashMessage('success', 'Partner updated successfully.');
        return redirect()->route('admin.partners.index');
    }

    public function destroy(Partner $partner)
    {
        $partner->delete();
        Storage::delete('public/partners/'.$partner->image);
        flashMessage('success', 'Partner deleted successfully.');
        return redirect()->route('admin.partners.index');
    }
}
