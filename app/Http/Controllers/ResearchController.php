<?php

namespace App\Http\Controllers;

use App\Models\Sdg;
use App\Models\SdgResearch;
use Illuminate\Http\Request;

class ResearchController extends Controller
{
    public function index(Request $request)
    {
        // Get search and filter inputs from request
        $search = $request->input('search');
        $sdgFilter = $request->input('sdg');

        // Build the query
        $query = SdgResearch::query();

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
        $researches = $query->with('experts')->latest()->paginate(10);
        $sdgs = Sdg::orderBy('name')->get();
        // Return the data to the frontend
        return inertia('researches/index', [
            'researches' => $researches,
            'sdgs' => $sdgs,
            'filters' => [
                'search' => $search,
                'sdg' => $sdgFilter,
            ],
        ]);
    }
}
