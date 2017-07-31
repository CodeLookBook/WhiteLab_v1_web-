<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');

            $table->unsignedInteger('role_id')->nullable();
            $table->string ('name'      )->nullable();
            $table->string ('patronymic')->nullable();
            $table->string ('surname'   )->nullable();
            $table->string ('login'     )->unique();
            $table->string ('password'  );
            $table->foreign('role_id'  )->references('id')->on('roles')->onDelete('SET NULL')->onUpdate('CASCADE');

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
        Schema::dropIfExists('users');
    }
}
