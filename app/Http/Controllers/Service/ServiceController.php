<?php

namespace App\Http\Controllers\Service;

use App\DTO\ServiceDTO;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\Service\ServiceServices;
use App\Http\Requests\CreateServiceRequest;
use App\Http\Requests\Service\UpdateServiceRequest;
use Exception;

class ServiceController extends Controller
{
    public function __construct(public ServiceServices $services)
    {
        $this->middleware('auth:sanctum')->only(['store', 'update', 'destroy']);
    }

    public function index(Request $request)
    {
        try {
            return $this->services->listService(
                ServiceDTO::listFromApi($request)
            );
        } catch (\Throwable $throwable) {
            return response()->json(['error' => "Something Wen't Wrong"], 500);
        }
    }

    public function store(CreateServiceRequest $request)
    {
        try {
            return $this->services->createService(
                ServiceDTO::createFromApi($request)
            );
        } catch (\Throwable $throwable) {
            return $this->respondError($throwable->getMessage());
            // return response()->json(['error' => "Something Wen't Wrong"], 500);
        }
    }


    public function update(UpdateServiceRequest $request, string $id)
    {
        try {
            return $this->services->updateService(
                ServiceDTO::updateFromApi($request),
                $id
            );
        } catch (\Throwable $throwable) {
            return response()->json(['error' => 'Service not found'], 404); // 404 Not Found
        } catch (\Throwable $throwable) {
            \Log::error($throwable);
            return response()->json(['error' => "Something Wen't Wrong"], 500);
        }
    }

    public function destroy(string $id)
    {
        try {
            $this->services->deleteService($id);
        } catch (\Throwable $throwable) {
            \Log::error($throwable);
            return response()->json(['error' => "Something Wen't Wrong"], 500);
        }
    }
}
