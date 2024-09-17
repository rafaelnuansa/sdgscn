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
        Schema::create('package_hotels', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->integer('night');
            $table->foreignUuid('hotel_id')->references('id')->cascadeOnDelete()->on('hotels');
            $table->foreignUuid('package_id')->references('id')->cascadeOnDelete()->on('packages');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('package_hotels');
    }
};
