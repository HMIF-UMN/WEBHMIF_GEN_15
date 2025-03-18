<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

use App\Models\User;


class RegisterController extends Controller
{
    public function register(Request $request)
    {

        $salt = bin2hex(random_bytes(32));

        $user = new User;
        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = hash('sha256', $request->password . $salt);
        $user->salt = $salt;
        $user->save();

    } 
}
