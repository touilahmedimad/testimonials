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
Route::get('test', function (){
    return response(['1,2,3'],200);
});

Route::middleware('auth.jwt')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/signin', [
    'uses' => 'UserController@SignIn'
]);
Route::get('/user_language', function (){
    return trans('user');
});

Route::get('/testimonials','TestimonialController@get');
