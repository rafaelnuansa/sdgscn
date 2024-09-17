<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class TestimonialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Gunakan Faker
        $faker = \Faker\Factory::create('id_ID');

        // Tambahkan 10 data palsu ke tabel testimonials
        for ($i = 0; $i < 10; $i++) {
            DB::table('testimonials')->insert([
                'id' => Str::uuid(),
                'name' => $faker->name,
                'from' => $faker->country,
                'description' => $faker->paragraph,
                'image' => $faker->imageUrl(640, 480, 'people', true, 'Faker'),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
