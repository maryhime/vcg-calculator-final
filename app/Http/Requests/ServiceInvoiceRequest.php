<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ServiceInvoiceRequest extends FormRequest
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
            "first_name" => "required|string|min:1|max:255",
            "last_name" => "required|string|min:1|max:255",
            "email" => "required|email",
            "company_name" => "required|string|min:1|max:255",
            "company_number" => "required|numeric|min:1",
            "concern" => "nullable|string",
            "table_rows" => "required|array",
            "table_rows.*.id" => "required|integer",
            "table_rows.*.jobTitle" => "required|string|min:1|max:255",
            "table_rows.*.americaSalary" => "required|numeric",
            "table_rows.*.phSalary" => "required|numeric",
            "table_rows.*.quantity" => "required|integer",
            "summary" => "required",
            "summary.totalUsCost" => "required|string|min:1|max:255",
            "summary.totalVcgCost" => "required|string|min:1|max:255",
            "summary.totalSavings" => "required|string|min:1|max:255",
        ];
    }
}
