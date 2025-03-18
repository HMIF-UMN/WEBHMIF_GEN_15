<?php

namespace App\Http\Controllers;

use App\Models\Ctf;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class PPIFController extends Controller
{
    public function index()
    {
        return Inertia::render('ppif', [
            'images' => asset('PPIF/images'),
            'logo' => asset('images/logo')
        ]);
    }

    public function submit(Request $request){
        try{
            $validator = Validator::make($request->all(), [
                'code' => 'required'
            ]);
            $validated = $validator->validate();

            $groups = Ctf::get();

            foreach($groups as $group){
                if($group->code === $validated['code']){
                    session()->flash('message', 'Code cracked! Hello group ' . $group->no_kelompok . ', your group name is "' . $group->nama_kelompok . '".');
                    return redirect()->route('padiIF');
                }
            }

            session()->flash('message', "Wrong code!");
        }
        catch(Exception $e){
            session()->flash('message', "Fill in the secret code!");
        }
        return redirect()->route('padiIF');
    }
}
