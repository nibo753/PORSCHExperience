<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('category_id');
            $table->string('name', 255)->nullable();
            $table->float('price')->nullable();
            $table->integer('pk')->nullable();
            $table->integer('kw')->nullable();
            $table->integer('topspeed')->nullable();
            $table->float('acceleration')->nullable();
            $table->float('acceleration_sport')->nullable();
            $table->float('fuel_consumption')->nullable();
            $table->float('power_consumption')->nullable();
            $table->float('emission')->nullable();
            $table->string('drive', 255)->nullable();
            $table->integer('height')->nullable();
            $table->integer('width')->nullable();
            $table->integer('length')->nullable();
            $table->integer('weight')->nullable();
            $table->integer('luggage')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cars');
    }
}
