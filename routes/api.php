<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CSSController;

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

Route::get('/current-registration-data', [CSSController::class, 'getCurrentData']);
Route::post('/register', [CSSController::class, 'formPost']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
