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
        Schema::create('mahasiswa__c_s_s', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('mahasiswa');
            $table->unsignedBigInteger('css');
            $table->unsignedBigInteger('group')->nullable();
            $table->timestamps();

            $table->foreign('mahasiswa')->references('id')->on('mahasiswas')->onDelete('cascade');
            $table->foreign('css')->references('id')->on('c_s_s')->onDelete('cascade');
            $table->foreign('group')->references('id')->on('c_s_s_groups')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mahasiswa__c_s_s');
    }
};
