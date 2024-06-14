<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function validateToken()
    {
        try {
            if (!Auth::guard('sanctum')->check()) {
                return response()->json(['error' => 'Unauthenticated.'], 401);
            }
            return response()->json([], 200); // 200 OK

        } catch (\Throwable $throwable) {
            \Log::error($throwable);
            return response()->json(['error' => 'Server error'], 500);
        }
    }

    public function userInfo()
    {
        try {
            return response()->json(['data' => auth()->user()], 200);
        } catch (\Throwable $throwable) {
            return response()->json(['error' => "Something Wen't Wrong!"], 500);
        }
    }
}
