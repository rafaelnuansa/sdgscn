<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SdgPublication extends Model
{
    use HasFactory, HasUuids;

    protected $guarded = ['id'];


    /**
     * Relasi many-to-one ke model Sdg.
     * Banyak publikasi bisa dimiliki oleh satu SDG.
     */
    public function sdg()
    {
        return $this->belongsTo(Sdg::class, 'sdg_id');
    }
}
