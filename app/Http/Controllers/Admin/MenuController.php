<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\Menu;
use App\Http\Controllers\Controller;

class MenuController extends Controller
{
    public function index()
    {
        return inertia('admin/menus/index');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'url' => 'nullable|string|max:255',
            'parent_id' => 'nullable|exists:menus,id',
        ]);

        if ($request->parent_id) {
            // Jika ada parent_id, hitung urutan baru berdasarkan parent_id
            $parentMenu = Menu::findOrFail($request->parent_id);
            $maxOrder = Menu::where('parent_id', $request->parent_id)->max('order');

            if ($maxOrder) {
                // Jika ada urutan di bawah parent_id, tambahkan 1 setelah nilai maksimum yang ada
                $order = floatval($parentMenu->order) + 0.1;
            } else {
                // Jika belum ada urutan di bawah parent_id, gunakan parent_id order ditambah 0.1
                $order = floatval($parentMenu->order) + 0.1;
            }
        } else {
            // Jika tidak ada parent_id, hitung urutan baru secara independen
            $order = Menu::max('order') + 1;
        }

        Menu::create([
            'name' => $request->name,
            'url' => $request->url,
            'parent_id' => $request->parent_id,
            'order' => $order,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Menu created successfully.'
        ]);
    }



    public function update(Request $request, $id)
    {
        $menu = Menu::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'url' => 'nullable|string|max:255',
            'parent_id' => 'nullable|exists:menus,id',
        ]);

        $menu->update($request->only('name', 'url', 'parent_id'));

        return response()->json([

            'success' => true,
            'message' => 'Menu updated successfully.'
        ]);
    }

    public function destroy($id)
    {
        $menu = Menu::findOrFail($id);
        // Hapus anak-anak secara rekursif
        $this->deleteChildren($menu);
        // Hapus menu utama
        $menu->delete();
        return response()->json([
            'success' => true,
            'message' => 'Menu deleted successfully.'
        ]);
    }

    protected function deleteChildren(Menu $menu)
    {
        $children = Menu::where('parent_id', $menu->id)->get();

        foreach ($children as $child) {
            $this->deleteChildren($child);
            $child->delete();
        }
    }
    public function sort(Request $request)
    {
        $menuList = $request->input('menuList');

        try {
            foreach ($menuList as $index => $menuItem) {
                if (isset($menuItem['id'])) {
                    Menu::where('id', $menuItem['id'])->update(['order' => $index + 1]);
                }
            }

            return response()->json([
                'success' => true,
                'message' => 'Menu items sorted successfully.'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to sort menu items.'
            ], 500);
        }
    }


    public function fetch()
    {
        $menus = Menu::with('children')
            ->whereNull('parent_id')
            ->orderBy('order', 'asc')
            ->get();

        // Ensure each menu item has 'children' property
        $menus = $menus->map(function ($menu) {
            $menu->children = $menu->children ?? []; // Ensure 'children' exists
            return $menu;
        });

        $select = Menu::whereNull('parent_id')->pluck('name', 'id')->map(function ($name, $id) {
            return ['label' => $name, 'value' => $id];
        })->values()->toArray();

        return response()->json(
            [
                'menus' => $menus,
                'select' => $select
            ],
            200,
            [],
            JSON_PRETTY_PRINT
        );
    }
}
