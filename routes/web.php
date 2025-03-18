<?php

use App\Http\Controllers\JammingController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\SocialMediaController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CodeXpoController;
// use App\Http\Controllers\PPIFController;
use App\Http\Controllers\CSSController;
use App\Http\Middleware\AdminCheck;
use App\Http\Middleware\LoginCheck;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
// mahaasiswa controller
use App\Http\Controllers\MahasiswaController;
use App\Http\Controllers\SurveyFormController;
use App\Http\Controllers\LinkController;
use App\Http\Controllers\KelasCssController;

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

Route::get('/coming-soon', [MainController::class, 'comingSoon']);
Route::get('/', [MainController::class, 'home'])->name('home');
Route::get('/about-us', [MainController::class, 'aboutUs']);
Route::get('/proker', [MainController::class, 'Proker']);
Route::get('/404', [MainController::class, 'error404']);
Route::get('/profile', [MainController::class, 'profile']);
Route::get('/surveyForm', [SurveyFormController::class, 'showForm'])->name('surveyForm');
// Route::get('/temp', [MainController::class, 'temp']);

Route::get('/dataUpdate/{id}', [MainController::class, 'dataUpdate']);
// Route::put('/confirm/{id}', [MahasiswaController::class, 'update']);
// NOTE: ini gw pakai named routes buat bisa dipakai di inertiajs - rivo
Route::put('/dataUpdate/{id}', [MahasiswaController::class, 'update'])->name("mahasiswa.update");
Route::post('/create/mahasiswa', [MahasiswaController::class, 'store']);

Route::get('/discord', [SocialMediaController::class, 'discord']);
Route::get('/email', [SocialMediaController::class, 'email']);
Route::get('/WA', [SocialMediaController::class, 'WA']);
Route::get('/line', [SocialMediaController::class, 'line']);
Route::get('/instagram', [SocialMediaController::class, 'instagram']);
Route::get('/instagram/{url}', [SocialMediaController::class, 'customInstagram'])->where('url', '.*');

// Route::get('/codexpo-if230', [EventController::class, 'codeXpo']);
// Route::group(['prefix' => 'codexpo-if231'], function(){
//   Route::get('/', [EventController::class, 'codeXpo']);
//   Route::get('/discord', [SocialMediaController::class, 'discordCodeXpo']);

//   Route::get('/mobilelegends', [codeXpoController::class, 'mobileLegends']);
// });

// Leaderboard
// Route::get('/typeracer', [codeXpoController::class, 'showLeaderboardTyperacer']);
// Route::get('/racing-simulator', [codeXpoController::class, 'showLeaderboardRacingSim']);

//Padi IF
// Route::get('/padiIF', [PPIFController::class, 'index'])->name('padiIF');
// Route::post('/padiIF/code/submit', [PPIFController::class, "submit"])->name("submitCode");

// Jamming Routes
Route::controller(JammingController::class)->group(function () {
    Route::get('/jamming', 'index')->name('jamming.index');
    Route::get('/form-jamming', 'form')->name('jamming.form');
    Route::post('/form-pembayaran', 'pembayaran')->name('jamming.pembayaran');
});

//CSS
//,'middleware' => 'login.check'
Route::group(['prefix' => 'cssIF', 'middleware' => 'login.check'], function(){
    Route::get('/', [CSSController::class, 'index'])->name("CSS");
    // Route::get('/', [CSSController::class, 'index'])->name('CSS')->middleware('login.check')->name("CSS");
    Route::get('/formPendaftaran/{rj}/{category}', [CSSController::class, 'form'])->name('Daftar');
    Route::post('/pendaftaran', [CSSController::class, 'formPost']);
    Route::post('/registerKelasCss', [KelasCssController::class, 'store']);
    Route::get('/disabled-classes', [KelasCssController::class, 'getDisabledClasses']);
});
Route::get('/sso/login', [CSSController::class, 'doLogin']);
Route::get('/sso/logout', [CSSController::class, 'doLogout']);

// PAGE RegistrationTest
Route::get('/regischeck', [CSSController::class, 'regisCheck']);

// Route::get('/testformcss', [CSSController::class, 'formGet']);
// Route::post('/testformcss', [CSSController::class, 'formPost']);

// Route::get('/{custom_url}', function ($custom_url) {
//   $link = App\Models\Link::where('custom_url', $custom_url)->firstOrFail();
//   return redirect($link->url);
// })->where('custom_url', '[a-zA-Z0-9\-_]+');

Route::get('/{custom_url}', [LinkController::class, 'redirectToCustomUrl'])->where('custom_url', '[a-zA-Z0-9\-_]+');

// Route::post('/register', [RegisterController::class, 'register']);
Route::get('/login', [LoginController::class, 'loginPage']);
Route::post('/login', [LoginController::class, 'login']);

Route::middleware(AdminCheck::class)->group(function(){
    Route::get('/dashboard', [AdminController::class, 'dashboard']);
    Route::post('/logout', [LoginController::class, 'logout']);

    Route::group(['prefix' => 'admin'], function(){
        Route::post('/typeracer', [codeXpoController::class, 'insert']);
        Route::get('/adminPage', [MainController::class, 'adminPage']);
        Route::get('/dataUpdate/{id}', [MainController::class, 'dataUpdate']);
        Route::put('/dataUpdate/{id}', [MahasiswaController::class, 'update'])->name("mahasiswa.update");
    });
});

// Route::middleware(LoginCheck::class)->group(function(){
    Route::get('/form-data', [LoginController::class, 'loginOCS']);
// });

Route::get('/check', [LoginController::class, 'check']);

//CSUTOM REDIRECT
Route::get('/gen14', function(){
	return redirect('https://forms.office.com/r/7pc9Ev3CuJ');
});
Route::get('/comvis/sealabs', function(){
	return redirect('https://forms.gle/EosAgf4qZH87fbLW9');
});
Route::get('/comvis/bca', function(){
    return redirect('https://forms.gle/Y4ogCEJfP5cPRLgu7');
});

Route::get('/connectifti2024', function(){
    return redirect('https://forms.office.com/r/MDg81meMuv');
});

//REDIRECT IF 404
Route::any('{url}', function(){
    return redirect('/404');
})->where('url', '.*');

require __DIR__.'/auth.php';
