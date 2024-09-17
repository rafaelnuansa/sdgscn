<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PackageVideoResource extends JsonResource
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
            'package_id' => $this->package_id,
            'title' => $this->title,
            'slug' => $this->slug,
            'video' => $this->video,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
