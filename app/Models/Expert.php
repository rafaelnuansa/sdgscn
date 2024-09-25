<?php

namespace App\Models;

use App\Traits\HasLabelValue;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expert extends Model
{
    use HasFactory, HasUuids, HasLabelValue;
    protected $guarded = ['id'];

    public function researches()
    {
        return $this->belongsToMany(SdgResearch::class, 'sdg_research_authors', 'expert_id', 'sdg_research_id');
    }

    public function publications()
    {
        return $this->belongsToMany(SdgPublication::class, 'sdg_publication_authors', 'expert_id', 'sdg_publication_id');
    }

}
