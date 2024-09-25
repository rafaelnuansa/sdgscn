<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SdgPublication extends Model
{
    use HasFactory, HasUuids;

    protected $guarded = ['id'];

    public function sdg()
    {
        return $this->belongsTo(Sdg::class, 'sdg_id');
    }
    
    public function experts()
    {
        return $this->belongsToMany(Expert::class, 'sdg_publication_experts', 'sdg_publication_id', 'expert_id');
    }
}
