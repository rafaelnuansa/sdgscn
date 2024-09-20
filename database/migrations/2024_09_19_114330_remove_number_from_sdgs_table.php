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
        Schema::table('sdgs', function (Blueprint $table) {
            $table->dropColumn('number'); // Menghapus kolom number
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('sdgs', function (Blueprint $table) {
            $table->integer('number')->after('image'); // Mengembalikan kolom number jika diperlukan
        });
    }
};
