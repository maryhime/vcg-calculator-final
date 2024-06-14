<?php

namespace App\Services\Invoice;

use App\Actions\SendMailToVcgAction;
use App\Actions\SendMailToClientAction;
use App\Http\Requests\ServiceInvoiceRequest;

class InvoiceService implements IInvoiceService
{
    public function sendInvoice(ServiceInvoiceRequest $request)
    {
        $clientServices = self::clientServices($request->table_rows);

        $clientData = [
            "rows" => $clientServices,
            "summary" => $request->summary
        ];

        $clientToVcgData = [
            ...$clientData,
            "name" => $request->first_name . ' ' . $request->last_name,
            "company_number" => $request->company_number,
            "email" => $request->email,
            "company_name" => $request->company_name,
            "concern" => $request->concern,
        ];

        SendMailToClientAction::execute($request->email, $clientData);
        SendMailToVcgAction::execute($clientToVcgData);
    }

    private function clientServices($rows)
    {
        $data = [];

        foreach ($rows as $row) {
            $savings = $row['americaSalary'] - $row['phSalary'];
            $savings *= $row['quantity'];

            $data[] = [
                ...$row,
                'savings' => number_format($savings, 2, '.', ',')
            ];
        }
        return $data;
    }
}
