<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PaymentListResource extends JsonResource
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
            'transaction_id' => $this->transaction_id,
            'booking_id' => $this->booking_id,
            'user_id' => $this->user_id,
            'method' => $this->method,
            'va_number' => $this->va_number,
            'amount' => $this->amount,
            'status' => $this->status,
            'expiry_time' => $this->expiry_time,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'deleted_at' => $this->deleted_at,
            'booking' => [
                'id' => $this->booking->id ?? '', 
                'invoice' => $this->booking->invoice,
                'price' => $this->booking->price,
                'qty' => $this->booking->qty,
                'amount' => $this->booking->amount,
                'remaining' => $this->booking->remaining_payment,
                'paid' => $this->booking->paid_payment,
                'package_id' => $this->booking->package_id,
                'user_id' => $this->booking->user_id,
                'status' => $this->booking->status,
                'created_at' => $this->booking->created_at,
                'updated_at' => $this->booking->updated_at,
                'deleted_at' => $this->booking->deleted_at,
                'package' => [
                    'id' => $this->booking->package->id,
                    'name' => $this->booking->package->name,
                    'price' => $this->booking->price,
                    'created_at' => $this->booking->package->created_at->format('d F Y H:i'),
                    'status' => $this->booking->package->status,
                    'day' => $this->booking->package->day,
                    'image' => $this->booking->package->image,
                    'rate' => $this->booking->package->rate,
                ],
            ],
        ];
    }
}
