<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function typeRacing()
    {
        return Inertia::render('admin/dashboard/typeRacing', [
            'csrf' => csrf_token(),
            'logo' => asset('images/logo'),
            'comingSoon' => asset('images/coming-soon')
        ]);
    }
    
    public function racingSimulator()
    {
        return Inertia::render('admin/dashboard/racingSimulator', [
            'csrf' => csrf_token(),
            'logo' => asset('images/logo'),
            'comingSoon' => asset('images/coming-soon')
        ]);
    }
}
