<?php

namespace App\Services\Invoice;

use App\Http\Requests\ServiceInvoiceRequest;

interface IInvoiceService
{
    public function sendInvoice(ServiceInvoiceRequest $request);
}
