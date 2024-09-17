<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            SettingsTableSeeder::class,
            AdminSeeder::class,
            HotelTableSeeder::class,
            MenuSeeder::class,
            PartnerSeeder::class,
            TestimonialSeeder::class,
        ]);
    }
}
