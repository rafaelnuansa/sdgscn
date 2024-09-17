<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {
          
            $table->uuid('id')->primary();
            $table->string('invoice')->unique();
            $table->bigInteger('price');
            $table->bigInteger('qty');
            $table->bigInteger('amount');
            $table->foreignUuid('package_id')->references('id')->on('packages')->cascadeOnDelete();
            $table->foreignUuid('user_id')->references('id')->on('users')->cascadeOnDelete();
            $table->enum('status', ['pending', 'approved', 'completed', 'canceled'] )->default('pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
