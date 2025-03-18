<?php

namespace App\Http\Controllers;

use App\Models\Link;
use Illuminate\Http\Request;

class LinkController extends Controller
{
    public function redirectToCustomUrl($custom_url)
    {
        $link = Link::where('custom_url', $custom_url)->first();

        if (!$link) {
            return redirect('/404');
        }
        
        return redirect($link->origin_url);
    }
}
