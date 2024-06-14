<?php

namespace App\DTO;

use Illuminate\Http\Request;

class SettingDTO
{
    public function __construct(
        public ?string $current_email,
        public ?string $new_email,
        public ?string $old_password,
        public ?string $new_password
    ) {
    }

    public static function updateEmailFromApi(Request $request)
    {
        return new static(
            $request->current_email,
            $request->new_email,
            $request?->old_password,
            $request?->new_password,
        );
    }

    public static function updatePasswordFromApi(Request $request)
    {
        return new static(
            $request?->current_email,
            $request?->new_email,
            $request->old_password,
            $request->new_password,
        );
    }
}
