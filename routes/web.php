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

/*Route::get('/{section?}', function () {
    return view('partials/app-partial');
})->where('section','[(?:(?<!api).)*(?<!api) | (?:(?<!admin).)*(?<!admin)]');

Route::get('/admin/{section_1?}/{section_2?}/{section_3?}', function () {
    return view('partials/admin-partial');
});*/

Route::get('/{section_1?}/{section_2?}/{section_3?}/{section_4?}', function ($section_1 = null) {
    if( preg_match('/admin*/', $section_1)){
        return view('partials/admin-partial');
    } else {
        return view('partials/app-partial');
    }

})->where('section_1','(?:(?<!api).)*(?<!api)');
