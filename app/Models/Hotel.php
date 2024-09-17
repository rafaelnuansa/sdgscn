<?php

namespace App\Models;

use App\Traits\HasLabelValue;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Hotel extends Model
{
    use HasFactory, HasLabelValue, SoftDeletes;

    protected $guarded = ['id'];
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $keyType = 'string';



    protected static function boot()
    {
        parent::boot();

        // Generate UUID for new payments
        static::creating(function ($payment) {
            $payment->id = Str::uuid();
        });
    }
    public function packages()
    {
        return $this->belongsToMany(Package::class, 'package_hotels')
            ->withPivot('night');
    } 

    public function images()
    {
        return $this->hasMany(HotelImage::class);
    }

    
}
