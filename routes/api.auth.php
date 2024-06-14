<?php

use App\Http\Controllers\Auth\AuthenticateController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::controller(AuthenticateController::class)->prefix('auth')->group(function () {
        Route::post('logout', 'logout');
    });
});

Route::controller(AuthenticateController::class)->prefix('auth')->group(function () {
    Route::post('/login', 'login');
});
