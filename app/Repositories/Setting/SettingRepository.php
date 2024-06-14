<?php

namespace App\Repositories\Setting;

use App\DTO\SettingDTO;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class SettingRepository implements ISettingRepository
{
    public function updateEmail(SettingDTO $settingDTO): User
    {
        $user = User::whereEmail($settingDTO->current_email)->firstOrFail();

        $user->email = $settingDTO->new_email;
        $user->save();

        // Consider an event/notification here for email changed

        return $user;
    }

    public function updatePassword(SettingDTO $settingDTO)
    {
        $email = auth()->user()->email;

        $user = User::where('email', $email)->firstOrFail();

        if (!Hash::check($settingDTO->old_password, $user->password)) {
            throw ValidationException::withMessages([
                'current_password' => ['Invalid Email or Password!'],
            ]);
        }

        $user->update([
            'password' => Hash::make($settingDTO->new_password)
        ]);

        $user->refresh();

        return $user;
    }
}
