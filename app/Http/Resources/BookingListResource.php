<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookingListResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'invoice' => $this->invoice,
            'qty' => $this->qty,
            'amount' => $this->amount,
            'remaining_payment' => $this->remaining_payment,
            'paid_payment' => $this->paid_payment,
            'status' => $this->status,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'package' => [
                'id' => $this->package->id,
                'name' => $this->package->name,
                'price' => $this->package->price,
                'category' => $this->package->category ? [
                    'id' => $this->package->category->id,
                    'name' => $this->package->category->name,
                ] : null,
            ],
            'user' => [
                'id' => $this->user->id,
                'name' => $this->user->name,
                'email' => $this->user->email,
            ],
            'payments' => $this->payments->map(function ($payment) {
                return [
                    'id' => $payment->id,
                    'transaction_id' => $payment->transaction_id,
                    'booking_id' => $payment->booking_id,
                    'method' => $payment->method,
                    'va_number' => $payment->va_number,
                    'amount' => $payment->amount,
                    'status' => $payment->status,
                    'expiry_time' => $payment->expiry_time,
                    'created_at' => $payment->created_at,
                    'updated_at' => $payment->updated_at,
                ];
            }),
            
        ];
    }
}
