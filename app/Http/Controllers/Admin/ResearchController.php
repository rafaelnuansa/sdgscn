<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Sdg;
use App\Models\SdgResearch;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ResearchController extends Controller
{
    public function index()
    {
        $researches = SdgResearch::latest()->paginate(10);
        return inertia('admin/research/index', [
            'researches' => $researches
        ]);
    }

    public function create()
    {
        return inertia('admin/research/create', [
            'sdgs' => Sdg::all(), // Ambil semua SDGs untuk dropdown
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'sdg_id' => 'required|exists:sdgs,id',
            'title' => 'required|string|max:255',
            'year' => 'nullable|string|max:4',
            'author' => 'required|string',
            'link' => 'nullable|url',
        ]);

        SdgResearch::create([
            'sdg_id' => $request->sdg_id,
            'title' => $request->title,
            'year' => $request->year,
            'author' => $request->author,
            'link' => $request->link,
        ]);

        flashMessage('Success', 'Research created successfully.');
        return redirect()->route('admin.research.index');
    }

    public function edit(SdgResearch $research)
    {
        return inertia('admin/research/edit', [
            'research' => $research,
            'sdgs' => Sdg::all(), // Ambil semua SDGs untuk dropdown
        ]);
    }

    public function update(Request $request, SdgResearch $research)
    {
        $request->validate([
            'sdg_id' => 'required|exists:sdgs,id',
            'title' => 'required|string|max:255',
            'year' => 'nullable|string|max:4',
            'author' => 'required|string',
            'link' => 'nullable|url',
        ]);

        $research->update([
            'sdg_id' => $request->sdg_id,
            'title' => $request->title,
            'year' => $request->year,
            'author' => $request->author,
            'link' => $request->link,
        ]);

        flashMessage('Success', 'Research updated successfully.');
        return redirect()->route('admin.research.index');
    }

    public function destroy(SdgResearch $research)
    {
        $research->delete();
        flashMessage('Success', 'Research deleted successfully.');
        return redirect()->route('admin.research.index');
    }
}
