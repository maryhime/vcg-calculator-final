<?php

namespace App\Repositories\Service;

use App\DTO\ServiceDTO;
use App\Models\Service;
use Illuminate\Support\Facades\DB;

class ServiceRepository implements IServiceRepository
{
    public function listService(array $filter)
    {
        return Service::whereAny(
            [
                'job_title',
                'north_america_price',
                'philippines_price'
            ],
            'LIKE',
            "%{$filter['search']}%"
        )
            ->orderBy($filter['order_by'], $filter['sort_by'])
            ->paginate(perPage: $filter['per_page'], columns: $filter['columns']);
    }

    public function createService(ServiceDTO $serviceDTO)
    {
        return DB::transaction(function () use ($serviceDTO) {
            $service = Service::create([
                'job_title' => $serviceDTO->job_title, // Use data from DTO
                'north_america_price' => $serviceDTO->north_america_price,
                'philippines_price' => $serviceDTO->philippines_price,
            ]);
            $service->refresh();
            return $service;
        });
    }

    public function updateService(ServiceDTO $serviceDTO, string $id)
    {
        return DB::transaction(function () use ($serviceDTO, $id) {
            $service = Service::findOrFail($id);

            $service->update([
                'job_title' => $serviceDTO->job_title,
                'north_america_price' => $serviceDTO->north_america_price,
                'philippines_price' => $serviceDTO->philippines_price,
            ]);

            $service->refresh();

            return $service;
        });
    }

    public function deleteService(string $id)
    {
        $service = Service::findOrFail($id);
        return $service->delete();
    }
}
