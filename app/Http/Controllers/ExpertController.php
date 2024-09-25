<?php

namespace App\Http\Controllers;

use App\Models\Expert;
use Illuminate\Http\Request;

class ExpertController extends Controller
{
    public function index(Request $request)
    {
        // Get the search input from the request
        $search = $request->input('search');

        // Build the query
        $query = Expert::orderBy('name');

        // Apply search filter if present
        if ($search) {
            $query->where('name', 'like', '%' . $search . '%');
        }

        // Paginate the results
        $experts = $query->paginate(10);

        return inertia('experts/index', [
            'experts' => $experts,
            'filters' => [
                'search' => $search,
            ],
        ]);
    }
}
