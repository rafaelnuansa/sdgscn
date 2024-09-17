<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\VideoResource;
use Illuminate\Http\Request;
use App\Models\Video;

use Illuminate\Support\Str;

class VideoController extends Controller
{

    public function index(Request $request)
    {
        $videos = VideoResource::collection(
            $self = Video::query()
                ->when($request->search, fn ($query, $value) => $query->where('title', 'like', '%' . $value . '%'))
                ->latest()
                ->paginate(10)
                ->withQueryString()
        )->additional([
            'meta' => [
                'has_pages' => $self->hasPages(),
            ],
        ]);

        return inertia('admin/videos/index', [
            'videos' => fn () => $videos,
            'state' => $request->only('page'),
        ]);
    }

 
    public function create()
    {
            return inertia('admin/videos/create', [
            'page_data' => fn () => [
                'video' => fn () => new Video(),
            ],
            'page_meta' => [
                'title' => 'Upload Video',
                'description' => 'New video upload',
                'url' => route('admin.videos.store'),
                'method' => 'post',
            ],
        ]);
    }


    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'video' => 'required|file|mimes:mp4,mkv,avi|max:20480', // max 20MB
        ]);

        $videoFile = $request->file('video');
        $videoName = time() . '_' . $videoFile->getClientOriginalName();
        $videoFile->storeAs('public/videos', $videoName);

        Video::create([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'video' => $videoName,
        ]);

        return redirect()->route('admin.videos.index')->with('success', 'Video created successfully.');
    }

    public function edit(Video $video)
    {
        return inertia('admin/videos/create', [
            'page_data' => fn () => [
                'video' => fn () => $video,
            ],
            'page_meta' => [
                'title' => 'Edit Package',
                'description' => "Edit the package video '{$video->title}'.",
                'url' => route('admin.videos.update', [$video]),
                'method' => 'put',
            ],
        ]);
    }

    public function update(Request $request, Video $video)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'video' => 'nullable|file|mimes:mp4,mkv,avi|max:20480', // max 20MB
        ]);

        $data = [
            'title' => $request->title,
            'slug' => Str::slug($request->title),
        ];

        if ($request->hasFile('video')) {
            $videoFile = $request->file('video');
            $videoName = time() . '_' . $videoFile->getClientOriginalName();
            $videoFile->storeAs('public/videos', $videoName);
            $data['video'] = $videoName;
        }
        $video->update($data);
        return redirect()->route('admin.videos.index')->with('success', 'Video updated successfully.');
    }

    public function destroy(Video $video)
    {
        $video->delete();
        return redirect()->route('admin.videos.index')->with('success', 'Video deleted successfully.');
    }
}
