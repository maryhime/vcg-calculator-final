<?php

namespace App\Repositories\Service;

use App\DTO\ServiceDTO;

interface IServiceRepository
{
    public function listService(array $filter);

    public function createService(ServiceDTO $serviceDTO);

    public function updateService(ServiceDTO $serviceDTO, string $id);

    public function deleteService(string $id);
}
