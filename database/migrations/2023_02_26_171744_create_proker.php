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
        Schema::create('proker', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('tanggal');
            $table->text('deskripsi');
            $table->string('logo');
            $table->string('link')->nullable();
            $table->boolean('isFinished');
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
        Schema::dropIfExists('proker');
    }
};
