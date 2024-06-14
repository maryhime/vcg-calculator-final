<?php

namespace App\Http\Controllers\Invoice;

use App\Http\Controllers\Controller;
use App\Http\Requests\ServiceInvoiceRequest;
use App\Services\Invoice\InvoiceService;

class ServiceQuotationController extends Controller
{
    public function sendInvoice(ServiceInvoiceRequest $request, InvoiceService $invoiceService)
    {
        try {
            $invoiceService->sendInvoice($request);
            return $this->respondOk('Success');
        } catch (\Throwable $throwable) {
            return $this->respondError($throwable->getMessage());
        }
    }
}
