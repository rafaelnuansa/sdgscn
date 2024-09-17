<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\PageListResource;
use App\Models\Page;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class PageController extends Controller
{
    public function index(Request $request)
    {
        $pages = PageListResource::collection(
            $self = Page::query()
                ->when($request->search, fn ($query, $value) => $query->where('title', 'like', '%' . $value . '%'))
                ->when($request->onlyTrashed, fn ($query) => $query->onlyTrashed())
                ->latest()
                ->paginate(10)
                ->withQueryString()

        )->additional([
            'meta' => [
                'has_pages' => $self->hasPages(),
            ],
        ]);

        return inertia('admin/pages/index', [
            'pages' => fn () => $pages,
            'state' => $request->only('page',  'search', 'onlyTrashed'),
        ]);
    }

    public function create()
    {
        return inertia('admin/pages/create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255|unique:pages,title',
            'content' => 'required|string',
            'seo_keywords' => 'nullable|string',
            'seo_description' => 'nullable|string',
        ]);

        Page::create([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'content' => $request->content,
            'seo_keywords' => $request->seo_keywords,
            'seo_description' => $request->seo_description,
        ]);

        flashMessage('Berhasil disimpan', 'Halaman baru telah dibuat');
        return redirect()->route('admin.pages.index');
    }

    public function edit(Page $page)
    {
        return inertia('admin/pages/edit', ['page' => $page]);
    }

    public function update(Request $request, Page $page)
    {
        $request->validate([
            'title' => [
                'required',
                'string',
                'max:255',
                Rule::unique('pages')->ignore($page), // Pastikan title unik kecuali untuk halaman saat ini
            ],
            'content' => 'required|string',
            'seo_keywords' => 'nullable|string',
            'seo_description' => 'nullable|string',
        ]);

        $page->update([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'content' => $request->content,
            'seo_keywords' => $request->seo_keywords,
            'seo_description' => $request->seo_description,
        ]);

        flashMessage('Berhasil disimpan', 'Halaman telah diperbarui');
        return redirect()->route('admin.pages.index');
    }

    public function destroy(Page $page)
    {
        $page->delete();
        flashMessage('Berhasil dihapus', 'Halaman telah dihapus');
        return redirect()->back();
    }

    public function restore($id) 
    {
      $page = Page::onlyTrashed()->where('id', $id);
      $page->restore();
      flashMessage('Berhasil direstore', 'Data Halaman berhasil dikembalikan');
      return redirect()->back();

    }

    public function force($id) 
    {
      $page = Page::onlyTrashed()->where('id', $id);
      $page->forceDelete();
      flashMessage('Berhasil dihapus', 'Data Halaman dihapus secara permanen');
      return redirect()->back();

    }

}
