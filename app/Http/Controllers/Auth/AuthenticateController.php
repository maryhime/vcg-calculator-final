<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;

class AuthenticateController extends Controller
{
    public function login(LoginRequest $request)
    {
        try {
            if (!\Auth::attempt($request->only(['email', 'password']))) {
                return response()->json(['error' => 'Invalid Email or Password'], 401);
            };

            $user = User::where('email', $request->email)->first();

            $token = $user->createToken(config('sanctum.token_name'))->plainTextToken;

            return $this->respondCreated([
                'email' => $user->email,
                'token' => $token,
                'message' => "Success"
            ]);
        } catch (\Throwable $throwable) {
            \Log::info([
                "error" => $throwable->getMessage(),
                "date and time" => now(),
                "location" => "Authentication Controller @login",

            ]);
            return $this->respondError($throwable->getMessage());
        }
    }

    public function logout()
    {
        try {
            auth('web')->logout();

            return $this->respondOk("Success");
        } catch (\Throwable $throwable) {
            \Log::info([
                "error" => $throwable->getMessage(),
                "date and time" => now(),
                "location" => "Authentication Controller @logout"
            ]);
            return $this->respondError($throwable->getMessage());
        }
    }
}
