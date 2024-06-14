<?php

namespace App\Actions;

use App\Mail\ServiceQuotationVcgMailer;
use Illuminate\Support\Facades\Mail;

class SendMailToVcgAction
{
    public static function execute(array $data)
    {
        $defaultRecipient = config('vcgmail.default_recipient');

        Mail::to($defaultRecipient)
            ->send(new ServiceQuotationVcgMailer($data));
    }
}
