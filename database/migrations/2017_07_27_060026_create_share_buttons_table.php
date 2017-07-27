<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShareButtonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /**
         * Table for storing setting of 'vue-social-sharing'
         * component.
         */
        Schema::create('share_buttons', function (Blueprint $table) {
            $table->increments('id');
            $table->string('location')->default('');
            $table->string('url')->default('');
            $table->string('title')->default('');
            $table->string('description')->default('');
            $table->string('quote')->default('');
            $table->string('hashtags')->default('');
            $table->string('twitter_user')->default('');
            $table->string('media')->default('');
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
        Schema::dropIfExists('share_buttons');
    }
}
