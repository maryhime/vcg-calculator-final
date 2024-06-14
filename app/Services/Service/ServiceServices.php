<?php

namespace App\Services\Service;

use App\DTO\ServiceDTO;
use App\Repositories\Service\ServiceRepository;

class ServiceServices implements IServiceServices
{

    public function __construct(public ServiceRepository $serviceRepository)
    {
    }

    public function listService(array $filters)
    {
        return $this->serviceRepository->listService($filters);
    }

    public function createService(ServiceDTO $serviceDTO)
    {
        return $this->serviceRepository->createService($serviceDTO);
    }

    public function updateService(ServiceDTO $serviceDTO, string $id)
    {
        return $this->serviceRepository->updateService($serviceDTO, $id);
    }

    public function deleteService(string $id)
    {
        return $this->serviceRepository->deleteService($id);
    }
}
