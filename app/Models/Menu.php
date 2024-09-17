<?php

namespace App\Models;

use App\Traits\HasLabelValue;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Menu extends Model
{
    use HasFactory, HasLabelValue;
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

    /**
     * Get the parent menu of the current menu.
     */
    public function parent()
    {
        return $this->belongsTo(Menu::class, 'parent_id');
    }

    /**
     * Get the child menus of the current menu.
     */
    // public function children()
    // {
    //     return $this->hasMany(Menu::class, 'parent_id');
    // }

    public function children()
    {
        return $this->hasMany(Menu::class, 'parent_id')->with('children')->orderBy('order');
    }
}
