<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HotelListResource extends JsonResource
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
            'location' => $this->location,
            'created_at' => $this->created_at->format('d F Y H:i'),
            'description' => $this->description,
            'stars' => $this->stars,
            'image' => $this->image,
            'night' => $this->pivot->night ?? 0,
        ];
    }
}
