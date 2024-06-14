<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $services =    [
            [
                "job_title" => 'Accounting and Bookkeeping',
                "north_america_price" => 55874,
                "philippines_price" => 30240,
            ],
            [
                "job_title" => 'Customer Success',
                "north_america_price" => 57473,
                "philippines_price" => 30240,
            ],
            [
                "job_title" => 'Customer Support (Tier 1)',
                "north_america_price" => 57473,
                "philippines_price" => 30240,
            ],
            [
                "job_title" => 'Customer Support (Tier 2)',
                "north_america_price" => 57473,
                "philippines_price" => 30240,
            ],
            [
                "job_title" => 'Customer Support (Tier 2)',
                "north_america_price" => 57473,
                "philippines_price" => 30240,
            ],
            [
                "job_title" => 'Customer Support (Tier 3)',
                "north_america_price" => 57473,
                "philippines_price" => 30240,
            ],
            [
                "job_title" => 'Telemarketing',
                "north_america_price" => 57473,
                "philippines_price" => 30240,
            ],
            [
                "job_title" => 'Executive Assistance',
                "north_america_price" => 57473,
                "philippines_price" => 30240,
            ],
            [
                "job_title" => 'Sales Development Services',
                "north_america_price" => 65015,
                "philippines_price" => 30240,
            ],
            [
                "job_title" => 'Search Engine Optimization (SEO)',
                "north_america_price" => 53927,
                "philippines_price" => 25920,
            ],
            [
                "job_title" => 'VA General Admin',
                "north_america_price" => 59190,
                "philippines_price" => 21600,
            ],
            [
                "job_title" => 'VA Real Estate',
                "north_america_price" => 48103,
                "philippines_price" => 21600,
            ],
            [
                "job_title" => 'Web and App Design and Development',
                "north_america_price" => 67251,
                "philippines_price" => 32400,
            ],
        ];

        foreach ($services as $service) {
            Service::create([
                'job_title' => $service['job_title'],
                'north_america_price' => $service['north_america_price'],
                'philippines_price' => $service['philippines_price'],
            ]);
        }
    }
}
