<?php

namespace App\Http\Controllers\Api\Public;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EditorController extends Controller
{
    public function store(Request $request)
    {
        // Upload new image
        $image = $request->file('image');
        $image->storeAs('public/images', $image->hashName());
        
        return response()->json([
            "success" => true,
            'file' => [
                'url' => asset('storage/images/' . $image->hashName())
            ]

        ]);
    }
    
    public function fetch(Request $request)
    {
        $url = $request->input('url');

        // Return the URL as is (or you could add additional validation or processing)
        return response()->json([
            'success' => true,
            'file' => [
                'url' => $url
            ]
        ]);
    }
}
