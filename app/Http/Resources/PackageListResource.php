<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PackageListResource extends JsonResource
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
            'name' => $this->name,
            'price' => $this->price,
            'created_at' => $this->created_at->format('d F Y H:i'),
            'status' => $this->status,
            'day' => $this->day,
            'image' => $this->image,
            'rate' => $this->rate,
            'category' => [
                'id' => $this->category->id,
                'name' => $this->category->name,
            ],
            'hotels_count' => $this->hotels()->count(),
            'itineraries_count' => $this->hotels()->count(),
            'visit_count' => $this->visit_count_total,
        ];
    }
}

