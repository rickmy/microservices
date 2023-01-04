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
        Schema::create('medicals', function (Blueprint $table) {
            $table->increments('id');
            $table->string('identification')->nullable();
            $table->string('first_name');
            $table->string('second_name');
            $table->string('last_name');
            $table->string('mother_last_name');
            $table->string('email');
            $table->string('senecyt_code');
            $table->string('email');
            $table->boolean('state')->default(true);

            


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
        Schema::dropIfExists('medicals');
    }
};
