<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

use App\Models\User;
use App\Models\Mahasiswa;

class LoginController extends Controller
{
    public function loginPage()
    {
        return Inertia::render('admin/login', [
            'csrf' => csrf_token(),
            'logo' => asset('images/logo'),
            'comingSoon' => asset('images/coming-soon')
        ]);
    }

    public function login(Request $request)
    {
        // validate request with only
        $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);
        $user = User::where('username', $request->username)->first();
        if ($user) {
            if (hash('sha256', $request->password . $user->salt) == $user->password) {
                Session::put('username', $user->username);
                Session::put('login', TRUE);
                return redirect('/codexpo/typeracing');
            } else {
                return redirect('/login');
            }
        } else {
            return redirect('/login');
        }
    }
    
    public function logout()
    {
        Session::flush();
        return redirect("/");
    }

    public function check()
    {
        if (Session::get('login')) {
            return response()->json([
                'status' => 'success',
                'message' => 'Sudah Login',
                'data' => Session::get('username')
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'Belum Login',
                'data' => null
            ], 401);
        }
    }
}
