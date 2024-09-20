<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('sdgs', function (Blueprint $table) {
            $table->string('slug')->unique()->after('name'); // Menambahkan kolom slug setelah name
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::table('sdgs', function (Blueprint $table) {
            $table->dropColumn('slug'); // Menghapus kolom slug jika rollback
        });
    }
};
