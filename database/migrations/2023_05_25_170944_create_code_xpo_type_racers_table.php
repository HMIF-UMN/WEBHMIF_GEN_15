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
        Schema::create('code_xpo_type_racers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('instagram')->unique();
            $table->integer('WPM');
            $table->integer('accuracy');
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
        Schema::dropIfExists('code_xpo_type_racers');
    }
};
