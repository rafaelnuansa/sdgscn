<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Package extends Model
{
    use HasFactory, SoftDeletes, HasUuids;
    protected $guarded = ['id'];
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $keyType = 'string';

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function hotels()
    {
        return $this->belongsToMany(Hotel::class, 'package_hotels')
            ->withPivot('night');
    }

    public function images()
    {
        return $this->hasMany(PackageImage::class);
    }

    public function itineraries()
    {
        return $this->hasMany(PackageItinerary::class);
    }

    public function videos()
    {
        return $this->hasMany(PackageVideo::class);
    }

}
