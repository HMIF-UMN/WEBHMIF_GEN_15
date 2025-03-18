<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    public function codeXpo()
    {
        return redirect()->away('https://forms.gle/WbvTxhkz4QjucSkY7');
    }
}
