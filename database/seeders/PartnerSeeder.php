<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PartnerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Gunakan Faker
        $faker = \Faker\Factory::create();

        // Tambahkan 10 data palsu ke tabel partners
        for ($i = 0; $i < 10; $i++) {
            DB::table('partners')->insert([
                'id' => Str::uuid(),
                'name' => $faker->company,
                'image' => $faker->imageUrl(640, 480, 'business', true, 'Faker'),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
