<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class MenuSeeder extends Seeder
{
    public function run()
    {
        // Inserting parent dropdown menu
        $parentId = Str::uuid();

        // // Inserting submenus
        // DB::table('menus')->insert([
        //     [
        //         'id' => Str::uuid(),
        //         'name' => 'Pertanyaan',
        //         'url' => '/faq',
        //         'parent_id' => $parentId,
        //         'order' => 1,
        //         'created_at' => now(),
        //         'updated_at' => now(),
        //     ],
        //     [
        //         'id' => Str::uuid(),
        //         'name' => 'Syarat dan Ketentuan',
        //         'url' => '/syarat-dan-ketentuan',
        //         'parent_id' => $parentId,
        //         'order' => 2,
        //         'created_at' => now(),
        //         'updated_at' => now(),
        //     ],
        // ]);

        // // Inserting other menu items
        // DB::table('menus')->insert([
        //     [
        //         'id' => Str::uuid(),
        //         'name' => 'Tentang Kami',
        //         'url' => '/pages/about-us',
        //         'parent_id' => null,
        //         'order' => 1,
        //         'created_at' => now(),
        //         'updated_at' => now(),
        //     ],
        // ]);
    }
}
