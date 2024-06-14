<?php

namespace App\Http\Requests\Setting;

use App\Http\Requests\BaseFormRequest;

class UpdatePasswordRequest extends BaseFormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            "old_password" => "required|string|current_password:sanctum",
            "new_password" => "required|confirmed|string|min:8|max:255"
        ];
    }


    public function messages()
    {
        return [
            "old_password.current_password" => "The old password is incorrect"
        ];
    }
}
