<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\Invoice\ServiceQuotationController;

Route::middleware('auth:sanctum')->group(function () {
    Route::controller(UserController::class)->prefix('auth')->group(function () {
        Route::get('authenticate', 'validateToken');
        Route::get('user-info',  'userInfo');
    });

    Route::controller(SettingController::class)->prefix('settings')->group(function () {
        Route::put('update-email', 'updateEmail');
        Route::put('update-password', 'updatePassword');
    });
});

Route::controller(ServiceQuotationController::class)->prefix('invoice')->group(function () {
    Route::post('send-email', 'sendInvoice');
});
