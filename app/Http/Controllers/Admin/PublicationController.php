<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Sdg;
use App\Models\SdgPublication;
use App\Models\Expert; // Import the Expert model
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PublicationController extends Controller
{
    public function index(Request $request)
    {
        // Get search input from request
        $search = $request->input('search');

        // Build the query
        $query = SdgPublication::with('experts');

        // Apply search filter by publication title
        if ($search) {
            $query->where(function ($q) use ($search) {
                // Search by title
                $q->where('title', 'like', '%' . $search . '%');

                // Or search by expert names
                $q->orWhereHas('experts', function ($expertQuery) use ($search) {
                    $expertQuery->where('name', 'like', '%' . $search . '%');
                });
            });
        }

        // Paginate the filtered results
        $publications = $query->latest()->paginate(10);

        // Get all SDGs for filtering
        $sdgs = Sdg::orderBy('name')->get();

        // Return the data to the frontend
        return inertia('admin/publication/index', [
            'publications' => $publications,
            'sdgs' => $sdgs,
            'filters' => [
                'search' => $search,
            ],
        ]);
    }


    public function create()
    {
        // Get all SDGs and experts for dropdown selection
        return inertia('admin/publication/create', [
            'sdgs' => Sdg::orderBy('name')->get(),
            'experts' => Expert::orderBy('name')->get(), // Fetch experts
        ]);
    }
    public function store(Request $request)
    {
        try {
            // Validate the request data
            $request->validate([
                'sdg_id' => 'required|exists:sdgs,id',
                'title' => 'required|string|max:255',
                'year' => 'nullable|string|max:4',
                'link' => 'nullable|string',
                'selected_experts' => 'required|array',
                'selected_experts.*' => 'exists:experts,id', // Validate expert IDs
            ]);

            // Create a new publication
            $publication = SdgPublication::create([
                'sdg_id' => $request->sdg_id,
                'title' => $request->title,
                'year' => $request->year,
                'link' => $request->link,
            ]);

            // Attach experts to the publication
            foreach ($request->selected_experts as $expertId) {
                $publication->experts()->attach($expertId, ['id' => Str::uuid()]); // Generate a unique ID for each expert
            }

            // Flash success message
            flashMessage('Success', 'Publication created successfully.');
            return redirect()->route('admin.publications.index');
        } catch (\Exception $e) {
            // Log the error message

            // Flash an error message
            flashMessage('Error', $e->getMessage());

            // Redirect back to the form with input and error messages
            return redirect()->back()->withInput()->withErrors(['error' => 'An error occurred while creating the publication.']);
        }
    }
    public function edit(SdgPublication $publication)
    {
        // Get the specific publication for editing
        return inertia('admin/publication/edit', [
            'publication' => $publication,
            'sdgs' => Sdg::orderBy('name')->get(),
            'experts' => Expert::orderBy('name')->get(), // Fetch experts
            'selected_experts' => $publication->experts->pluck('id'), // Get selected experts' IDs
        ]);
    }

    public function update(Request $request, SdgPublication $publication)
    {
        // Validate the request data
        $request->validate([
            'sdg_id' => 'required|exists:sdgs,id',
            'title' => 'required|string|max:255',
            'year' => 'nullable|string|max:4',
            'link' => 'nullable|string',
            'experts' => 'nullable|array',
            'experts.*' => 'exists:experts,id', // Validate expert IDs
        ]);

        // Update the publication
        $publication->update([
            'sdg_id' => $request->sdg_id,
            'title' => $request->title,
            'year' => $request->year,
            'link' => $request->link,
        ]);

        // Sync experts with the publication (generate new UUIDs if needed)
        $expertData = [];
        foreach ($request->experts as $expertId) {
            $expertData[$expertId] = ['id' => Str::uuid()]; // Associate each expert ID with a new UUID
        }
        $publication->experts()->sync($expertData); // Sync with generated UUIDs

        flashMessage('Success', 'Publication updated successfully.');
        return redirect()->route('admin.publications.index');
    }

    public function destroy(SdgPublication $publication)
    {
        // Delete the publication
        $publication->delete();

        flashMessage('Success', 'Publication deleted successfully.');
        return redirect()->route('admin.publications.index');
    }
}
