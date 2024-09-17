<?php

namespace App\Models;

use App\Traits\HasLabelValue;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Category extends Model
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
        return $this->hasMany(Package::class);
    }
}
