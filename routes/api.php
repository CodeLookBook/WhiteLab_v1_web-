<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


/**
 * Routes available for all web users;
 */
Route::post('/admin/login'          , 'UserController@login'    );
Route::get ('/admin/auth/validation', 'AuthController@isValid'  );
