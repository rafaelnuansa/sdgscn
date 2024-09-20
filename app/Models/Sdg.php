<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sdg extends Model
{
    use HasFactory, HasUuids;
    protected $guarded = ['id'];


    /**
     * Relasi one-to-many ke model SdgPublication.
     * Satu SDG bisa memiliki banyak publikasi.
     */
    public function publications()
    {
        return $this->hasMany(SdgPublication::class, 'sdg_id');
    }

    /**
     * Relasi one-to-many ke model SdgResearch.
     * Satu SDG bisa memiliki banyak penelitian.
     */
    public function researches()
    {
        return $this->hasMany(SdgResearch::class, 'sdg_id');
    }
}
