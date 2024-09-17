<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ArticleResource;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ArticleController extends Controller
{
    public function index(Request $request)
    {
        $articles = ArticleResource::collection(
            $self = Article::query()
                ->when($request->search, fn ($query, $value) => $query->where('title', 'like', '%' . $value . '%'))
                ->latest()
                ->paginate(10)
                ->withQueryString()

        )->additional([
            'meta' => [
                'has_pages' => $self->hasPages(),
            ],
        ]);


        return inertia('admin/articles/index', [
            'articles' => fn () => $articles,
            'state' => $request->only('page', 'search'),
        ]);
    }

    public function create()
    {
        return inertia('admin/articles/create', [
            'page_data' => fn () => [
                'article' => fn () => new Article(),
            ],
            'page_meta' => [
                'title' => 'Create Article',
                'description' => 'Create a new article by filling out the form below.',
                'url' => route('admin.articles.store'),
                'method' => 'post',
            ],
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
            'content' => 'nullable',
        ]);

        // dd($request);
        $image = $request->file('image');
        $image->storeAs('public/articles', $image->hashName());

        $article = new Article();
        $article->title = $request->title;
        $article->slug = Str::slug($request->title);
        $article->image = $image->hashName();
        $article->content = $request->content;
        $article->save();
        flashMessage('success', 'Article created successfully.');
        return redirect()->route('admin.articles.index');
    }

    public function edit(Article $article)
    {
        return inertia('admin/articles/create', [
            'page_data' => fn () => [
                'article' => fn () => $article,
            ],
            'page_meta' => [
                'title' => 'Edit Article',
                'description' => "Edit the article titled '{$article->title}'.",
                'url' => route('admin.articles.update', $article),
                'method' => 'put',
            ],
        ]);
    }

    public function update(Request $request, Article $article)
    {
        $request->validate([
            'title' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
            'content' => 'nullable',
        ]);

        if ($request->hasFile('image')) {
            //upload new image
            $image = $request->file('image');
            $image->storeAs('public/articles', $image->hashName());
            //delete old image
            Storage::delete('public/articles/' . $article->image);
            //update partner with new image
            $article->image = $image->hashName();
        }
        $article->title = $request->title;
        $article->slug = Str::slug($request->title);
        $article->content = $request->content;
        $article->save();
        flashMessage('success', 'Article updated successfully.');
        return redirect()->route('admin.articles.index');
    }

    public function destroy(Article $article)
    {
        // Delete the image file from the server using unlink
        $imagePath = public_path('images') . '/' . $article->image;
        if (file_exists($imagePath)) {
            unlink($imagePath);
        }

        // Delete the article from the database
        $article->delete();
        flashMessage('success', 'Article deleted successfully.');
        return redirect()->route('admin.articles.index');
    }

    public function storeImagePost(Request $request)
    {
        //upload new image
        $image = $request->file('image');
        $image->storeAs('public/articles', $image->hashName());

        return response()->json([
            'url'       => asset('storage/articles/'.$image->hashName())
        ]);
    }
}
