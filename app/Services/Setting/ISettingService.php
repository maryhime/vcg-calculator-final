<?php

namespace App\Services\Setting;

use App\DTO\SettingDTO;

interface ISettingService
{
    public function updateEmail(SettingDTO $settingDTO);

    public function updatePassword(SettingDTO $settingDTO);
}
