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
        Schema::create('packages', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('image');
            $table->bigInteger('price');
            $table->bigInteger('minimum_dp_percent');
            $table->integer('rate');
            $table->integer('day');
            $table->text('description')->nullable();
            $table->text('content')->nullable();
            $table->foreignUuid('category_id')->references('id')->on('categories')->cascadeOnDelete();
       
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('packages');
    }
};
