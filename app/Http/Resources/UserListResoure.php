<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserListResoure extends JsonResource
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
            'email' => $this->email,
            'gravatar' => $this->gravatar(100),
            'initials' => $this->getInitials($this->name),
            'created_at' => $this->created_at,
            'is_admin' => $this->is_admin,
        ];
    }

    protected function getInitials($name): string
    {
        $initials = preg_split('/\s+/', $name);
        $initials = array_map(fn ($word) => strtoupper($word[0]), $initials);
        $initials = array_slice($initials, 0, 2);

        return implode('', $initials);
    }
}
