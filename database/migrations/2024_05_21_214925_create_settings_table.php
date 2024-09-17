<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('website_name')->nullable();
            $table->string('website_logo')->nullable();
            $table->string('website_logo_dark')->nullable();
            $table->string('website_favicon')->nullable();
            $table->text('website_description')->nullable();
            $table->string('website_address')->nullable();
            $table->string('website_phone')->nullable();
            $table->string('website_phone_whatsapp')->nullable();
            $table->string('website_facebook_url')->nullable();
            $table->string('website_instagram_url')->nullable();
            $table->string('website_linkedin_url')->nullable();
            $table->string('website_youtube_url')->nullable();
            $table->string('website_email')->nullable();
            $table->string('mapbox_api_key')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('settings');
    }
};
