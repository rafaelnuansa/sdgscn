<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
class Booking extends Model
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
 
    public function package()
    {
        return $this->belongsTo(Package::class);
    }


    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }

    public function getRemainingPaymentAttribute()
    {
        $totalPaidAmount = $this->payments()->where('status', 'success')->sum('amount');
        if ($totalPaidAmount === 0) {
            return $this->amount;
        }
        return $this->amount - $totalPaidAmount;
    }

    public function getPaidPaymentAttribute()
    {
        $totalPaidAmount = $this->payments()->where('status', 'success')->sum('amount');
        return $totalPaidAmount;
    }
    
}
