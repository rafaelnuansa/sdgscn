<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryListResource;
use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    public function index(Request $request)
    {
        $categories = CategoryListResource::collection(
            Category::latest()
                ->when($request->search, fn ($query, $value) => $query->where('name', 'like', '%' . $value . '%'))
                ->withCount('packages')
                ->paginate(10)
                ->withQueryString()
        );

        return inertia('admin/categories/index', [
            'categories' => fn () => $categories,
            'state' => $request->only('page',  'search'),
        ]);
    }

    public function create()
    {
        return inertia('admin/categories/create', [
            'page_data' => fn () => [
                'category' => fn () => new Category(),
            ],
            'page_meta' => [
                'title' => 'Create Category',
                'description' => 'Create a new category by filling out the form below.',
                'url' => route('admin.categories.store'),
                'method' => 'post',
            ],
        ]);
    }


    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:categories',
        ]);

        $category = new Category();
        $category->name = $request->name;
        $category->slug = Str::slug($request->name);
        $category->save();
        flashMessage('Success', 'Category created successfully.');
        return redirect()->route('admin.categories.index');
    }

    public function edit(Category $category)
    {
        return inertia('admin/categories/create', [
            'page_data' => fn () => [
                'category' => fn () => $category,
            ],
            'page_meta' => [
                'title' => 'Edit Category',
                'description' => "Edit the category titled '{$category->name}'.",
                'url' => route('admin.categories.update', $category),
                'method' => 'put',
            ],
        ]);
    }

    public function update(Request $request, Category $category)
    {
        $request->validate([
            'name' => 'required|unique:categories,name,'.$category->id,
        ]);

        $category->name = $request->name;
        $category->slug = Str::slug($request->name);
        $category->save();
        flashMessage('Category Updated', 'Category updated successfully.', 'success', 'top-right');

        return redirect()->route('admin.categories.index');
    }

    public function destroy(Category $category)
    {
        $category->delete();
        return redirect()->route('admin.categories.index')->with('success', 'Category deleted successfully.');
    }
}
