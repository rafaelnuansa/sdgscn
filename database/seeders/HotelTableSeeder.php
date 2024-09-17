<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class HotelTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Seeder for hotels with UUIDs
        $hotels = [
            [
                'id' => (string) Str::uuid(),
                'name' => 'Hotel Hilton Makkah',
                'location' => 'Makkah',
                'description' => 'Hotel mewah dekat Masjidil Haram, menawarkan fasilitas bintang lima dan kenyamanan terbaik.',
                'stars' => 5,
                'image' => 'hilton_makkah.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => (string) Str::uuid(),
                'name' => 'Hotel Pullman ZamZam Makkah',
                'location' => 'Makkah',
                'description' => 'Hotel modern yang menyediakan akses mudah ke Masjidil Haram dan fasilitas berkualitas tinggi.',
                'stars' => 5,
                'image' => 'pullman_zamzam_makkah.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => (string) Str::uuid(),
                'name' => 'Hotel Anwar Al Madinah Mövenpick',
                'location' => 'Madinah',
                'description' => 'Hotel nyaman yang terletak dekat dengan Masjid Nabawi, ideal untuk jamaah haji dan umrah.',
                'stars' => 5,
                'image' => 'anwar_al_madinah_movenpick.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => (string) Str::uuid(),
                'name' => 'Hotel Dar Al Taqwa',
                'location' => 'Madinah',
                'description' => 'Hotel bintang lima yang menawarkan pemandangan indah Masjid Nabawi dan layanan prima.',
                'stars' => 5,
                'image' => 'dar_al_taqwa.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('hotels')->insert($hotels);

        // Seeder for categories with UUIDs
        $categories = [
            [
                'id' => (string) Str::uuid(),
                'name' => 'Umroh',
                'slug' => 'umroh',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => (string) Str::uuid(),
                'name' => 'Haji',
                'slug' => 'haji',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('categories')->insert($categories);

        // Retrieve the UUIDs for categories
        $umrohCategoryId = DB::table('categories')->where('name', 'Umroh')->first()->id;
        $hajiCategoryId = DB::table('categories')->where('name', 'Haji')->first()->id;

        // Seeder for packages with UUIDs
        $packages = [
            [
                'id' => (string) Str::uuid(),
                'name' => 'Umroh Reguler',
                'slug' => Str::slug('Umroh Reguler'),
                'image' => 'umroh_reguler.jpg',
                'price' => 20000000,
                'rate' => 4,
                'minimum_dp_percent' => 30,
                'day' => 10,
                'description' => 'Paket umroh reguler dengan fasilitas lengkap dan pelayanan terbaik.',
                'content' => 'Konten detail paket umroh reguler.',
                'category_id' => $umrohCategoryId, // Using UUID
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => (string) Str::uuid(),
                'name' => 'Haji Khusus',
                'slug' => Str::slug('Haji Khusus'),
                'image' => 'haji_khusus.jpg',
                'price' => 50000000,
                'minimum_dp_percent' => 30,
                'rate' => 5,
                'day' => 30,
                'description' => 'Paket haji khusus dengan pelayanan eksklusif dan fasilitas mewah.',
                'content' => 'Konten detail paket haji khusus.',
                'category_id' => $hajiCategoryId, // Using UUID
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('packages')->insert($packages);

        // Retrieve the UUIDs for hotels and packages
        $hiltonMakkahId = DB::table('hotels')->where('name', 'Hotel Hilton Makkah')->first()->id;
        $pullmanZamzamMakkahId = DB::table('hotels')->where('name', 'Hotel Pullman ZamZam Makkah')->first()->id;
        $anwarAlMadinahId = DB::table('hotels')->where('name', 'Hotel Anwar Al Madinah Mövenpick')->first()->id;
        $darAlTaqwaId = DB::table('hotels')->where('name', 'Hotel Dar Al Taqwa')->first()->id;

        $umrohRegulerId = DB::table('packages')->where('name', 'Umroh Reguler')->first()->id;
        $hajiKhususId = DB::table('packages')->where('name', 'Haji Khusus')->first()->id;

        // Seeder for package_hotels with UUIDs
        $packageHotels = [
            [
                'id' => (string) Str::uuid(),
                'night' => 5,
                'hotel_id' => $hiltonMakkahId, // Using UUID
                'package_id' => $umrohRegulerId, // Using UUID
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => (string) Str::uuid(),
                'night' => 5,
                'hotel_id' => $pullmanZamzamMakkahId, // Using UUID
                'package_id' => $umrohRegulerId, // Using UUID
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => (string) Str::uuid(),
                'night' => 10,
                'hotel_id' => $anwarAlMadinahId, // Using UUID
                'package_id' => $hajiKhususId, // Using UUID
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => (string) Str::uuid(),
                'night' => 10,
                'hotel_id' => $darAlTaqwaId, // Using UUID
                'package_id' => $hajiKhususId, // Using UUID
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('package_hotels')->insert($packageHotels);

          // Seeder for package itineraries with UUIDs
          $itineraries = [
            [
                'id' => (string) Str::uuid(),
                'day' => 'Day 1',
                'description' => 'Arrival at Jeddah and transfer to Makkah.',
                'package_id' => $umrohRegulerId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => (string) Str::uuid(),
                'day' => 'Day 2',
                'description' => 'Perform Umrah rituals.',
                'package_id' => $umrohRegulerId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => (string) Str::uuid(),
                'day' => 'Day 1',
                'description' => 'Arrival at Madinah and check-in to the hotel.',
                'package_id' => $hajiKhususId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => (string) Str::uuid(),
                'day' => 'Day 2',
                'description' => 'Visit the Prophet’s Mosque.',
                'package_id' => $hajiKhususId,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('package_itineraries')->insert($itineraries);

        // Retrieve the UUIDs for package itineraries
        $umrohDay1Id = DB::table('package_itineraries')->where('description', 'Arrival at Jeddah and transfer to Makkah.')->first()->id;
        $umrohDay2Id = DB::table('package_itineraries')->where('description', 'Perform Umrah rituals.')->first()->id;
        $hajiDay1Id = DB::table('package_itineraries')->where('description', 'Arrival at Madinah and check-in to the hotel.')->first()->id;
        $hajiDay2Id = DB::table('package_itineraries')->where('description', 'Visit the Prophet’s Mosque.')->first()->id;

        // Seeder for package itinerary items with UUIDs
        $itineraryItems = [
            [
                'id' => (string) Str::uuid(),
                'description' => 'Arrival at Jeddah airport.',
                'package_itinerary_id' => $umrohDay1Id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => (string) Str::uuid(),
                'description' => 'Transfer to Makkah by bus.',
                'package_itinerary_id' => $umrohDay1Id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => (string) Str::uuid(),
                'description' => 'Start Umrah rituals with Tawaf.',
                'package_itinerary_id' => $umrohDay2Id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => (string) Str::uuid(),
                'description' => 'Perform Sa’i between Safa and Marwah.',
                'package_itinerary_id' => $umrohDay2Id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => (string) Str::uuid(),
                'description' => 'Arrival at Madinah airport.',
                'package_itinerary_id' => $hajiDay1Id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => (string) Str::uuid(),
                'description' => 'Check-in to the hotel.',
                'package_itinerary_id' => $hajiDay1Id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => (string) Str::uuid(),
                'description' => 'Morning visit to the Prophet’s Mosque.',
                'package_itinerary_id' => $hajiDay2Id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => (string) Str::uuid(),
                'description' => 'Evening prayers at the Prophet’s Mosque.',
                'package_itinerary_id' => $hajiDay2Id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('package_itinerary_items')->insert($itineraryItems);
    
    }
}
