<?php

namespace App\Http\Requests;


class CreateServiceRequest extends BaseFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'job_title' => [
                'required',
                'string',
                'max:255',
                'unique:services,job_title'
            ],
            'north_america_price' => [
                'required',
                'numeric',
                'min:0',
            ],
            'philippines_price' => [
                'required',
                'numeric',
                'min:0',
            ],
        ];
    }
}
