<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SocialMediaController extends Controller
{
    public function discordCodeXpo()
    {
        return redirect()->away('https://discord.gg/f93HVpfJNu');
    }

    public function discord()
    {
        return redirect()->away('https://discord.gg/ywjuhAmXut');
    }

    public function line()
    {
        return redirect()->away('https://line.me/ti/p/~@682fnddg');
    }
    
    public function instagram()
    {
        return redirect()->away('https://instagram.com/hmif.umn');
    }

    public function WA()
    {
        return redirect()->away('https://wa.me/6281385440193');
    }

    public function email()
    {
        return redirect()->away('https://mail.google.com/mail/u/0/?fs=1&to=hmif@umn.ac.id&tf=cm');
    }

    //CUSTOM URLs
    public function customInstagram($param)
    {
        return redirect()->away('https://instagram.com/'.$param);
    }
}
