<?php

namespace App\Http\Controllers;

use App\Models\Sdg;
use App\Models\SdgPublication;
use Illuminate\Http\Request;

class PublicationController extends Controller
{
    public function index(Request $request)
    {
        // Get search and filter inputs from request
        $search = $request->input('search');
        $sdgFilter = $request->input('sdg');

        // Build the query
        $query = SdgPublication::query();

        // Apply SDG filter if present
        if ($sdgFilter) {
            $query->where('sdg_id', $sdgFilter);
        }

        // Apply search filter by publication title or expert name
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
        $publications = $query->with('experts')->latest()->paginate(10);
        $sdgs = Sdg::orderBy('name')->get();
        // Return the data to the frontend
        return inertia('publications/index', [
            'publications' => $publications,
            'sdgs' => $sdgs,
            'filters' => [
                'search' => $search,
                'sdg' => $sdgFilter,
            ],
        ]);
    }
}
