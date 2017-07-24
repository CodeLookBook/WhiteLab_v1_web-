<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{section?}', function () {
    return view('partials/app-partial');
})->where('section','[(?:(?<!api).)*(?<!api) | (?:(?<!admin).)*(?<!admin)]');

Route::get('/admin/{section_1?}/{section_2?}', function () {
    return view('partials/admin-partial');
});