<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Mahasiswa;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;

class MahasiswaController extends Controller
{
    // Schema::create('mahasiswas', function (Blueprint $table) {
    //     $table->id();
    //     $table->string('NIM')->unique();
    //     $table->string('email')->unique();
    //     $table->string('name');
    //     $table->integer('angkatan');
    //     $table->string('jurusan');
    //     $table->timestamps();
    // });

    public function store(Request $request)
    {
        $request->validate([
            'NIM' => 'required|unique:mahasiswas',
            'email' => 'required|unique:mahasiswas',
            'name' => 'required',
            'angkatan' => 'required',
            'jurusan' => 'required',
        ]);

        $mahasiswa = new Mahasiswa;
        $mahasiswa->NIM = $request->NIM;
        $mahasiswa->email = $request->email;
        $mahasiswa->name = $request->name;
        $mahasiswa->angkatan = $request->angkatan;
        $mahasiswa->jurusan = $request->jurusan;
        $mahasiswa->save();

        Session::put('username', $mahasiswa->email);
        Session::put('login', TRUE);

        return response()->json([
            'message' => 'Mahasiswa created',
            'data' => $mahasiswa,
            'status' => 200
        ]);

    }

    public function show($id)
    {
        $mahasiswa = Mahasiswa::find($id);

        if($mahasiswa){
            return response()->json([
                'message' => 'Mahasiswa found',
                'data' => $mahasiswa,
            ]);
        }else{
            return response()->json([
                'message' => 'Mahasiswa not found',
                'data' => null,
            ]);
        }
    }

        
    public function update(Request $request, $id)
    {
        $mahasiswa = Mahasiswa::find($id);

        if($mahasiswa){
            $mahasiswa->NIM = $request->NIM ? $request->NIM : $mahasiswa->NIM;
            $mahasiswa->email = $request->email ? $request->email : $mahasiswa->email;
            $mahasiswa->name = $request->name ? $request->name : $mahasiswa->name;
            $mahasiswa->angkatan = $request->angkatan ? $request->angkatan : $mahasiswa->angkatan;
            $mahasiswa->jurusan = $request->jurusan ? $request->jurusan : $mahasiswa->jurusan;
            $mahasiswa->save();

            return redirect('/admin/adminPage');

        }else{
            return response()->json([
                'message' => 'Mahasiswa not found',
                'data' => null,
            ]);
        }
    }
}
