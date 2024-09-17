<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Models\HomeContent;

class HomeContentController extends Controller
{
    public function index()
    {
        $homeContents = HomeContent::all();
        $categories = Category::all();

        return inertia('admin/homecontent/index', [
            'homeContents' => $homeContents,
            'categories' => $categories
        ]);
    }

    public function update(Request $request)
    {
        try {
            $data = $request->input('data', []);

            foreach ($data as $item) {
                if (!$item['is_active']) {
                    HomeContent::where('package_category_id', $item['package_category_id'])->delete();
                    continue;
                }

                if (!$item['is_active'] || !isset($item['sort_column'], $item['sort_order'])) {
                    continue;
                }

                $homeContent = HomeContent::firstOrNew(
                    ['package_category_id' => $item['package_category_id']]
                );
                $homeContent->fill([
                    'sort_column' => $item['sort_column'],
                    'sort_order' => $item['sort_order']
                ]);
                $homeContent->save();
            }

            flashMessage('Success','Home contents updated successfully', 'success');
        } catch (\Exception $e) {
            flashMessage('Error',$e->getMessage(), 'error');
            return redirect()->back();
        }
    }
}

