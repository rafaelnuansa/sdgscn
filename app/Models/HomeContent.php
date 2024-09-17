<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;


class HomeContent extends Model
{
    use HasFactory;
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

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

}

