@component('mail::message')
<div>
<p style="margin: 0; font-size: 16px; font-weight: 400; color: #404252; line-height: 150%;">
    Thank you for requesting a full quotation from Virtual Champs Global!
    We’re thrilled to assist you in maximizing your savings and optimizing your operations.
</p>
</div>

@component('mail::table')
<table style="width: 580px; border-collapse: collapse; margin-bottom: 20px;">
    <thead>
        <tr>
            <th style="padding: 8px; text-align: left; border-bottom: 1px solid #ddd;">Quantity</th>
            <th style="padding: 8px; text-align: left; border-bottom: 1px solid #ddd;">Job Title</th>
            <th style="padding: 8px; text-align: left; border-bottom: 1px solid #ddd;">North America</th>
            <th style="padding: 8px; text-align: left; border-bottom: 1px solid #ddd;">Philippines</th>
            <th style="padding: 8px; text-align: left; border-bottom: 1px solid #ddd;">Your Savings</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($services['rows'] as $service)
        <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">{{ $service['quantity'] }}</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">{{ $service['jobTitle'] }}</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${{ $service['americaSalary'], 2 }}</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${{ $service['phSalary'], 2 }}</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${{ $service['savings'], 2 }}</td>
        </tr>
        @endforeach
        <tr>
            <td style="padding: 8px; border-bottom: none; vertical-align: middle;"></td>
            <td style="padding: 8px; border-bottom: none; vertical-align: middle;"></td>
            <td style="padding: 8px; border-bottom: none; vertical-align: middle;"></td>
            <td style="padding: 8px; border-bottom: none; vertical-align: middle;"></td>
            <td style="padding: 8px; border-bottom: none; vertical-align: middle;"></td>
        </tr>
    </tbody>
</table>
@endcomponent

@component('mail::table')
<table style="width: 100%; margin-top: 20px;">
    <tr>
        <td style="text-align: left; vertical-align: middle;"><strong>In House (US) Cost:</strong></td>
        <td style="text-align: right; vertical-align: middle;"><span style="color: red; font-size: 24px; font-weight: 700;">{{$services['summary']['totalUsCost']}}</span></td>
    </tr>
    <tr>
        <td style="text-align: left; vertical-align: middle;"><strong>VCG Cost:</strong></td>
        <td style="text-align: right; vertical-align: middle;"><span style="color: green; font-size: 32px; font-weight: 700;">{{$services['summary']['totalVcgCost']}}</span></td>
    </tr>
    <tr>
        <td style="text-align: left; vertical-align: middle;"><strong>The total estimated savings you could achieve is:</strong></td>
        <td style="text-align: right; vertical-align: middle;"><span style="color: blue; font-size: 48px; font-weight: 700;">{{$services['summary']['totalSavings']}}</span></td>
    </tr>
</table>
@endcomponent

@component('mail::button', ['url' => env("APP_URL")])
Visit Calculator
@endcomponent
@endcomponent
