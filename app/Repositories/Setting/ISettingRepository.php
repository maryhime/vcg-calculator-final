<?php

namespace App\Repositories\Setting;

use App\DTO\SettingDTO;

interface ISettingRepository
{
    public function updateEmail(SettingDTO $settingDTO);

    public function updatePassword(SettingDTO $settingDTO);
}
