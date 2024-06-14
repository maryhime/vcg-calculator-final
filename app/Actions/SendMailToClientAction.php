<?php

namespace App\Actions;

use App\Mail\ServiceQuotationMailer;
use Illuminate\Support\Facades\Mail;

class SendMailToClientAction
{
    public static function execute(array | string $recipient, array $data)
    {
        Mail::to((array)$recipient)
            ->send(new ServiceQuotationMailer($data));
    }
}
