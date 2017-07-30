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
Route::post('/admin/login'                     , 'UserController@login'          );
Route::post('/admin/panel/greet'               , 'HomePageController@getGreet'   );
Route::get ('/admin/panel/price'               , 'PriceController@download'      );
Route::get ('/admin/panel/facebook-group'      , 'SocialGroupController@getFacebookGroupReference' );
Route::get ('/admin/panel/instagram-group'     , 'SocialGroupController@getInstagramGroupReference');
Route::post('/admin/panel/share-button'        , 'ShareButtonController@retrieve');
Route::post('/admin/panel/order-widget'        , 'OrderWidgetController@retrieve');
Route::get ('/admin/panel/vacancies'         , 'OrderWidgetController@list'    );

Route::group(['middleware'=>['super-admin']], function () {
    Route::patch ('admin/panel/greet'          , 'HomePageController@updateGreet');
    Route::delete('admin/panel/greet'          , 'HomePageController@deleteGreet');
    Route::post  ('admin/panel/home-page_greet-block-fon', 'HomePageController@uploadGreetBlockFon');
});


Route::group(['middleware'=>['super-admin']], function (){
    Route::post  ('admin/panel/price'           , 'PriceController@upload'       );
});

Route::group(['middleware'=>['super-admin']], function (){
    Route::post  ('admin/panel/address_map'     , 'AddressController@upload'     );
});

//Social groups refs.
Route::group(['middleware'=>['super-admin']], function (){
    Route::post  ('admin/panel/facebook-group'     , 'SocialGroupController@updateFacebookGroupReference');
    Route::delete('admin/panel/facebook-group'     , 'SocialGroupController@deleteFacebookGroupReference');
    Route::post  ('admin/panel/instagram-group'    , 'SocialGroupController@updateInstagramGroupReference');
    Route::delete('admin/panel/instagram-group'    , 'SocialGroupController@deleteInstagramGroupReference');
});

Route::group(['middleware'=>['super-admin']], function (){
    Route::patch ('/admin/panel/share-button'            , 'ShareButtonController@update');
    Route::delete('/admin/panel/share-button/{location}' , 'ShareButtonController@delete');
});

Route::group(['middleware'=>['super-admin']], function (){
    Route::patch ('/admin/panel/order-widget' , 'OrderWidgetController@update');
    Route::delete('/admin/panel/order-widget/{name}/{language}' , 'OrderWidgetController@delete')
        ->where('name','Yclients')
        ->where('language', '(Russian|English|Slovak|russian|english|slovak)');
});

Route::group(['middleware'=>['super-admin']], function (){
    Route::post  ('/admin/panel/vacancy'           , 'OrderWidgetController@create');
    Route::patch ('/admin/panel/vacancy/{vacancy}' , 'OrderWidgetController@update');
    Route::delete('/admin/panel/vacancy/{vacancy}' , 'OrderWidgetController@delete');
});