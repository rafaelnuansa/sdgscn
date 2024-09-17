<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            [
                'name' => 'User',
                'email' => 'user@user.com',
                'email_verified_at' => now(),
                'password' => bcrypt('password'),
                'is_admin' => false,
                'phone' => '+6281286013809'
            ],
        ])->each(fn ($user) => \App\Models\User::create($user));
    }
}
