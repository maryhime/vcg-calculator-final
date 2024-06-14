<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('job_title');
            $table->decimal('north_america_price', 8, 2)->default(0.00);
            $table->decimal('philippines_price', 8, 2)->default(0.00);
            $table->decimal('savings', 8, 2)->storedAs('north_america_price - philippines_price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
