<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('game/autumn', 'GameController@autumn');

Route::get('huaye', 'HuayeController@index');
Route::get('huaye/autumn', 'HuayeController@autumn');
Route::get('huaye/cloud', 'HuayeController@cloud');
Route::get('huaye/fashion', 'HuayeController@fashion');
Route::get('huaye/jinyin', 'HuayeController@jinyin');
Route::get('huaye/mofan', 'HuayeController@mofan');
Route::get('huaye/school', 'HuayeController@school');
Route::get('huaye/shop', 'HuayeController@shop');
Route::get('huaye/smart', 'HuayeController@smart');
