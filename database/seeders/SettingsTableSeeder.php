<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class SettingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $settings = [
            'id' => (string) Str::uuid(),
            'website_name' => 'SDGs Center Network Universitas Djuanda',
            'website_logo' => 'logo.png',
            'website_logo_dark' => 'logo_dark.png',
            'website_favicon' => 'favicon.ico',
            'website_description' => 'This is a description of my website.',
            'website_address' => '123 Main St, Anytown, Anywhere',
            'website_phone' => '123-456-7890',
            'website_phone_whatsapp' => '6281286013809',
            'website_facebook_url' => 'https://www.facebook.com/mywebsite',
            'website_instagram_url' => 'https://www.instagram.com/mywebsite',
            'website_linkedin_url' => 'https://www.linkedin.com/company/mywebsite',
            'website_youtube_url' => 'https://www.youtube.com/mywebsite',
            'website_email' => 'info@mywebsite.com',
            'mapbox_api_key' => 'your-mapbox-api-key',
            'created_at' => now(),
            'updated_at' => now(),
        ];

        DB::table('settings')->insert($settings);
    }
}
