@component('mail::message')
<p style="font-size: 16px; font-weight: 400; color: #404252; line-height: 150%;">
    A new request for a full quotation has been received from a client who used our savings calculator. Below are
    the
    details of the request and the roles they added:
</p>

<h2 style="margin: 0; font-size: 18px; margin-bottom: 8px;color: #404252; line-height: 150%;">Request Details:</h2>

<p style="margin: 0; font-size: 16px; color: #404252; line-height: 150%;">
    <strong>Name : </strong> {{$services['name']}}
</p>
<p style="margin: 0; font-size: 16px; color: #404252; line-height: 150%;">
    <strong>Company :</strong> {{$services['company_name']}}
</p>
<p style="margin: 0; font-size: 16px; color: #404252; line-height: 150%;">
    <strong>Email : </strong> {{$services['email']}}
</p>
<p style="margin: 0; font-size: 16px; color: #404252; line-height: 150%;">
    <strong>Phone : </strong> {{$services['company_number']}}
</p>
<p style="margin: 0; margin-bottom: 24px; font-size: 16px; color: #404252; line-height: 150%;">
    <strong>Concern : </strong> {{$services['concern']}}
</p>

<h2 style="margin: 0; font-size: 18px; margin-bottom: 8px;color: #404252; line-height: 150%;">Summary of Roles
    Added:
</h2>

@component('mail::table')
<table style="width: 580px; border-collapse: collapse; margin-bottom: 16px;">
    <thead>
        <tr>
            <th style="padding: 16px; text-align: left; border-bottom: 1px solid #ddd;">Quantity</th>
            <th style="padding: 16px; text-align: left; border-bottom: 1px solid #ddd;">Job Title</th>
            <th style="padding: 16px; text-align: left; border-bottom: 1px solid #ddd;">North America</th>
            <th style="padding: 16px; text-align: left; border-bottom: 1px solid #ddd;">Philippines</th>
            <th style="padding: 16px; text-align: left; border-bottom: 1px solid #ddd;">Your Savings</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($services['rows'] as $service)
        <tr>
            <td style="padding: 16px; border-bottom: 1px solid #ddd;">{{ $service['quantity'] }}</td>
            <td style="padding: 16px; border-bottom: 1px solid #ddd;">{{ $service['jobTitle'] }}</td>
            <td style="padding: 16px; border-bottom: 1px solid #ddd;">${{ $service['americaSalary'], 2 }}</td>
            <td style="padding: 16px; border-bottom: 1px solid #ddd;">${{ $service['phSalary'], 2 }}</td>
            <td style="padding: 16px; border-bottom: 1px solid #ddd;">${{ $service['savings'], 2 }}</td>
        </tr>
        @endforeach
        <tr>
            <td style="padding: 16px; border-bottom: none; vertical-align: middle;"></td>
            <td style="padding: 16px; border-bottom: none; vertical-align: middle;"></td>
            <td style="padding: 16px; border-bottom: none; vertical-align: middle;"></td>
            <td style="padding: 16px; border-bottom: none; vertical-align: middle;"></td>
            <td style="padding: 16px; border-bottom: none; vertical-align: middle;"></td>
        </tr>
    </tbody>
</table>
@endcomponent

@component('mail::table')
<table style="width: 100%; margin-top: 20px;">
    <tr>
        <td style="text-align: left; vertical-align: middle;"><strong>In House (US) Cost:</strong></td>
        <td style="text-align: right; vertical-align: middle;"><span
                style="color: red; font-size: 24px; font-weight: 700;">{{$services['summary']['totalUsCost']}}</span></td>
    </tr>
    <tr>
        <td style="text-align: left; vertical-align: middle;"><strong>VCG Cost:</strong></td>
        <td style="text-align: right; vertical-align: middle;"><span
                style="color: green; font-size: 32px; font-weight: 700;">{{$services['summary']['totalVcgCost']}}</span></td>
    </tr>
    <tr>
        <td style="text-align: left; vertical-align: middle;"><strong>The total estimated savings you could achieve
                is:</strong></td>
        <td style="text-align: right; vertical-align: middle;"><span
                style="color: blue; font-size: 48px; font-weight: 700;">{{$services['summary']['totalSavings']}}</span></td>
    </tr>
</table>
@endcomponent

<p style="font-size: 16px; font-weight: 400; color: #404252; line-height: 150%;">
    Please prepare a detailed and customized quotation for the client based on the information provided. If any
    additional
    details are needed, please contact the client directly.
</p>
<p style=" font-size: 16px; font-weight: 400; color: #404252; line-height: 150%;">
    Thank you.
</p>
@endcomponent
