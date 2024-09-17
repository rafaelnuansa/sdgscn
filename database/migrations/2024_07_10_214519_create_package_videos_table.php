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
        Schema::create('package_videos', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('package_id')->references('id')->on('packages')->cascadeOnDelete();
            $table->string('title');
            $table->string('slug');
            $table->string('video');
            $table->timestamps();
        });
    }
 
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('package_videos');
    }
};
