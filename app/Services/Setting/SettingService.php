<?php

namespace App\Services\Setting;

use App\DTO\SettingDTO;
use App\Repositories\Setting\SettingRepository;

class SettingService implements ISettingService
{

    public function __construct(public SettingRepository $settingRepository)
    {
    }

    public function updateEmail(SettingDTO $settingDTO)
    {
        return $this->settingRepository->updateEmail($settingDTO);
    }

    public function updatePassword(SettingDTO $settingDTO)
    {
        return $this->settingRepository->updatePassword($settingDTO);
    }
}
