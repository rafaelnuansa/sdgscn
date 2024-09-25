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
        Schema::create('sdg_publication_experts', function (Blueprint $table) {
          
            $table->uuid('id')->primary();
            $table->foreignUuid('sdg_publication_id')->references('id')->on('sdg_publications')->cascadeOnDelete();
            $table->foreignUuid('expert_id')->references('id')->on('experts')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sdg_publication_experts');
    }
};
