<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PackageVideo extends Model
{
    use HasFactory, HasUuids;

    protected $guarded = ['id'];
    
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $keyType = 'string';
    
    public function package()
    {
        return $this->belongsTo(Package::class);
    }
}
