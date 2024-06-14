<?php

namespace App\Services\Service;

use App\DTO\ServiceDTO;

interface IServiceServices
{
    public function listService(array $filters);
    public function createService(ServiceDTO $serviceDTO);
    public function updateService(ServiceDTO $serviceDTO, string $id);
    public function deleteService(string $id);
}
