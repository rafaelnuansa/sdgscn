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
        Schema::create('sdg_publications', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title');
            $table->string('year')->nullable();
            $table->string('link')->nullable();
            $table->foreignUuid('sdg_id')->references('id')->on('sdgs')->cascadeOnUpdate()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sdg_publications');
    }
};
