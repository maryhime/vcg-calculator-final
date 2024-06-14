<?php

use App\Http\Controllers\Service\ServiceController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
});

Route::resource('service', ServiceController::class);
