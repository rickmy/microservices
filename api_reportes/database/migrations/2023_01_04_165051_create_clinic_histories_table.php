<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clinic_histories', function (Blueprint $table) {
            $table->increments('id');
            $table->date('attention_date');
            $table->string('attention_hour');
            $table->string('appointment_reason');
            $table->boolean('state')->default(true);
            $table->string('medical_observation');
            $table->integer('patient_id')->unsigned();
            $table->foreign('patient_id')->references('id')->on('patients');

            $table->integer('medical_id')->unsigned();
            $table->foreign('medical_id')->references('id')->on('medicals');

            $table->integer('symptom_id')->unsigned();
            $table->foreign('symptom_id')->references('id')->on('symptoms');

            $table->integer('diagnostic_id')->unsigned();
            $table->foreign('diagnostic_id')->references('id')->on('diagnostics');
            
            $table->integer('treatment_id')->unsigned();
            $table->foreign('treatment_id')->references('id')->on('treatments');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clinic_histories');
    }
};
