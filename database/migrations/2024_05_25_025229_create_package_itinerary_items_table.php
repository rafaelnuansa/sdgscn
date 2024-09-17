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
        Schema::create('package_itinerary_items', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('description');
            $table->foreignUuid('package_itinerary_id')->references('id')->on('package_itineraries')->cascadeOnDelete();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('package_itinerary_items');
    }
};
