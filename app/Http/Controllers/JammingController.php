<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class JammingController extends Controller
{
    public function index()
    {
        return inertia('Jamming/Leaderboard', [
            'foto' => asset('images/jamming'),
        ]);
    }

    public function form()
    {
        return inertia('Jamming/Form');
    }

    public function payment(Request $request) 
    {
        $data = $request->all();
        return inertia('Jamming/Pembayaran', ['data' => $request]);
    }
}
