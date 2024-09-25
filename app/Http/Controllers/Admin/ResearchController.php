<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Expert;
use App\Models\Sdg;
use App\Models\SdgResearch;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Database\QueryException;

class ResearchController extends Controller
{
    public function index(Request $request)
    {
        // Get search and filter inputs from request
        $search = $request->input('search');
        $sdgFilter = $request->input('sdg');

        // Build the query
        $query = SdgResearch::query()->with('experts');

        // Apply SDG filter if present
        if ($sdgFilter) {
            $query->where('sdg_id', $sdgFilter);
        }

        // Apply search filter by research title
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

        // Paginate the filtered and searched results
        $researches = $query->latest()->paginate(10);

        // Get all SDGs for filtering
        $sdgs = Sdg::orderBy('name')->get();

        // Return the data to the frontend
        return inertia('admin/research/index', [
            'researches' => $researches,
            'sdgs' => $sdgs,
            'filters' => [
                'search' => $search,
                'sdg' => $sdgFilter,
            ],
        ]);
    }


    public function create()
    {
        return inertia('admin/research/create', [
            'sdgs' => Sdg::orderBy('name')->get(),
            'experts' => Expert::orderBy('name')->get(),
        ]);
    }


    public function store(Request $request)
    {
        $request->validate([
            'sdg_id' => 'required|exists:sdgs,id',
            'title' => 'required|string|max:255',
            'year' => 'nullable|string|max:4',
            'link' => 'nullable|url',
            'experts' => 'nullable|array',
            'experts.*' => 'exists:experts,id'
        ]);

        try {
            $research = SdgResearch::create([
                'sdg_id' => $request->sdg_id,
                'title' => $request->title,
                'year' => $request->year,
                'link' => $request->link,
            ]);

            // Attach each expert with a unique UUID
            foreach ($request->experts as $expertId) {
                $research->experts()->attach($expertId, ['id' => Str::uuid()]); // Generate a unique ID for each expert
            }

            flashMessage('Success', 'Research created successfully.');
            return redirect()->route('admin.research.index');
        } catch (QueryException $e) {
            // Handle specific database exceptions
            flashMessage('Error', 'Failed to create research: ' . $e->getMessage(), 'error');
            return redirect()->back()->withInput();
        } catch (\Exception $e) {
            // Handle any other exceptions
            flashMessage('Error', 'An unexpected error occurred: ' . $e->getMessage(), 'error');
            return redirect()->back()->withInput();
        }
    }


    public function edit(SdgResearch $research)
    {
        return inertia('admin/research/edit', [
            'research' => $research,
            'sdgs' => Sdg::orderBy('name')->get(),
            'experts' => Expert::orderBy('name')->get(),
            'selected_experts' => $research->experts->pluck('id') // Get selected experts' IDs
        ]);
    }

    public function update(Request $request, SdgResearch $research)
    {
        $request->validate([
            'sdg_id' => 'required|exists:sdgs,id',
            'title' => 'required|string|max:255',
            'year' => 'nullable|string|max:4',
            'link' => 'nullable|url',
            'experts' => 'nullable|array',
            'experts.*' => 'exists:experts,id'
        ]);
    
        try {
            // Update the research record
            $research->update([
                'sdg_id' => $request->sdg_id,
                'title' => $request->title,
                'year' => $request->year,
                'link' => $request->link,
            ]);
    
            // Sync experts with the research
            // Generate a new UUID for each entry
            $expertData = [];
            foreach ($request->experts as $expertId) {
                $expertData[$expertId] = ['id' => Str::uuid()]; // Associate each expert ID with a new UUID
            }
            $research->experts()->sync($expertData); // Sync with generated UUIDs
    
            flashMessage('Success', 'Research updated successfully.');
            return redirect()->route('admin.research.index');
    
        } catch (QueryException $e) {
            // Handle specific database exceptions
            flashMessage('Error', 'Failed to update research: ' . $e->getMessage(), 'error');
            return redirect()->back()->withInput();
        } catch (\Exception $e) {
            // Handle any other exceptions
            flashMessage('Error', 'An unexpected error occurred: ' . $e->getMessage(), 'error');
            return redirect()->back()->withInput();
        }
    }
    


    public function destroy(SdgResearch $research)
    {
        $research->delete();
        flashMessage('Success', 'Research deleted successfully.');
        return redirect()->route('admin.research.index');
    }
}
