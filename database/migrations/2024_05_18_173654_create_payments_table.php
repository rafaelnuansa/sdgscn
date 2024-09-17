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
        Schema::create('payments', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('booking_id')->references('id')->cascadeOnDelete()->on('bookings')->cascadeOnUpdate();
            $table->foreignUuid('user_id')->references('id')->cascadeOnDelete()->on('users')->cascadeOnUpdate();
            $table->string('method')->nullable();
            $table->string('snap_token')->nullable();
            $table->bigInteger('amount');
            $table->enum('type', ['down_payment', 'full', 'completion']);
            $table->enum('status', ['pending', 'failed', 'cancel', 'success', 'expired'])->default('pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
