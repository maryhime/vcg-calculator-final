<?php

namespace App\DTO;

use Illuminate\Http\Request;
use App\Http\Requests\CreateServiceRequest;
use App\Http\Requests\Service\UpdateServiceRequest;

class ServiceDTO
{
    public function __construct(
        public string $job_title,
        public $north_america_price,
        public $philippines_price
    ) {
    }

    public static function listFromApi(Request $request)
    {
        return [
            "per_page" => $request->per_page ?? 15,
            "order_by" => $request->order_by ?? 'id',
            "sort_by" => $request->sort_by ?? 'desc',
            "columns" => $request->columns ?? ['*'],
            "search" => $request->search ?? ""
        ];
    }

    public static function createFromApi(CreateServiceRequest $request)
    {
        return new static(
            $request->job_title,
            $request->north_america_price,
            $request->philippines_price,
        );
    }

    public static function updateFromApi(UpdateServiceRequest $request)
    {
        return new static(
            $request->job_title,
            $request->north_america_price,
            $request->philippines_price,
        );
    }
}
