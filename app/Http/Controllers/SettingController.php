<?php

namespace App\Http\Controllers;

use App\DTO\SettingDTO;
use App\Http\Requests\Setting\UpdateEmailRequest;
use App\Http\Requests\Setting\UpdatePasswordRequest;
use App\Services\Setting\SettingService;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function __construct(public SettingService $setting)
    {
    }

    public function updateEmail(UpdateEmailRequest $request)
    {
        try {
            return $this->setting->updateEmail(SettingDTO::updateEmailFromApi($request));
        } catch (\Throwable $throwable) {
            dd($throwable);
        }
    }

    public function updatePassword(UpdatePasswordRequest $request)
    {
        try {
            return $this->setting->updatePassword(SettingDTO::updatePasswordFromApi($request));
        } catch (\Throwable $throwable) {
            dd($throwable);
        }
    }
}
