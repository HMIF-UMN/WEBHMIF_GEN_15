<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\codeXpoTypeRacer;
use App\Models\codeXpoRacingSimulator;
use Inertia\Inertia;

class CodeXpoController extends Controller
{
    public function insert(Request $request){
        $validatedReq = $request->validate([
            'name' => 'required',
            'instagram' => 'required|unique:code_xpo_type_racers,instagram',
            'WPM' => 'required|integer',
            'accuracy' => 'required|integer|between:0,100',
        ]);

        codeXpoTypeRacer::create($validatedReq);

        return redirect('/dashboard')->with('status', 'Data berhasil diinput');
    }

    public function showLeaderboardTyperacer(){
        $top10 = codeXpoTypeRacer::orderBy('WPM', 'desc')->orderBy('accuracy', 'desc')->limit(10)->get();
        return Inertia::render('codeXpo/typeracer', [
            'csrf' => csrf_token(),
            'logo' => asset('images/logo'),
            'comingSoon' => asset('images/coming-soon'),
            'top10s' => $top10
        ]);
    }
    
    public function showLeaderboardRacingSim(){
        $top10 = codeXpoRacingSimulator::orderBy('duration', 'desc')->limit(10)->get();
        return Inertia::render('codeXpo/racingSim', [
            'csrf' => csrf_token(),
            'logo' => asset('images/logo'),
            'comingSoon' => asset('images/coming-soon'),
            'top10s' => $top10
        ]);
    }
    
    public function mobileLegends(){
        return Inertia::render('codeXpo/mobileLegends', [
            'csrf' => csrf_token(),
            'logo' => asset('images/logo'),
            'comingSoon' => asset('images/coming-soon')
        ]);
    }
}
