<?php

namespace App\Http\Controllers;

use App\Http\Resources\PengurusResource;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Pengurus;
use App\Models\Mahasiswa;
use App\Models\CSS;
use App\Models\Home;
use App\Models\HomeCarousel;
use App\Models\Contact;
use App\Models\DivisiAnggota;
use App\Models\AboutUs;
use App\Models\Vision;
use App\Models\Mission;
use App\Models\GridPhoto;
use App\Models\Navbar;
use App\Models\ProkerText;
use \Illuminate\Support\Facades\DB;
use Exception;
use Illuminate\Support\Facades\Session;
use Illuminate\Contracts\Database\Eloquent\Builder;


class MainController extends Controller
{
    public function comingSoon()
    {
        return Inertia::render('comingSoon', [
            'logo' => asset('images/logo'),
            'comingSoon' => asset('images/coming-soon')
        ]);
    }

    public function error404()
    {
        return Inertia::render('error404', [
            'logo' => asset('images/logo'),
            'comingSoon' => asset('images/coming-soon'),

        ]);
    }

    public function formAspirasi()
    {
        return Inertia::render('formAspirasi', ["email" => Session::get('username')]);
    }

    public function profile()
    {
        return Inertia::render('profile', [
            'logo' => asset('images/logo'),
            'comingSoon' => asset('images/coming-soon'),
            'proker' => asset('images/proker'),
            'foto' => asset('images/home'),
            'icon' => asset('images/icon'),
        ]);
    }

    public function home()
    {
        $homes = Home::all();
        $contacts = Contact::all();

        $prokers = DB::table('proker')->select('id', 'nama', 'tanggal', 'deskripsi', 'logo')->orderBy('id', 'DESC')->take(3)->get();
        return Inertia::render('home', [
            'user' => Session::has('login_key') ? Mahasiswa::where('email', Session::get('login_key'))->with(['css', 'group'])->first() : null,
            'prokers' => $prokers,
            'image' => asset('images'),
            'photos' => asset('images/photos'),
            'logo' => asset('images/home'),
            'homes' => $homes,
            'contacts' => $contacts,
            'home_carousel' => HomeCarousel::all(),
            'navbars' => Navbar::all(),
        ]);
    }

    // public function navbar()
    // {
    //     return Inertia::render('navbar', [
    //         'navbars' => Navbar::all(),
    //     ]);
    // }

    public function aboutUs()
    {
        $pengurus = [];
        $gen = request()->has("gen") ? request('gen') : "GEN XIV";
        for ($i = 1; $i <= 11; $i++) {
            array_push(
                $pengurus,
                Pengurus::query()
                    ->with('divisi')
                    ->with('gen')
                    ->where('id_divisi', $i)
                    ->get()
            );
        }

        //        dd($pengurus);

        return Inertia::render('aboutUs', [
            'user' => Session::has('login_key') ? Mahasiswa::where('email', Session::get('login_key'))->with(['css', 'group'])->first() : null,
            'image' => asset('images'),
            'logo' => asset('images/logo'),
            'anggota' => asset('images/anggota'),
            'medpar' => asset('images/medpar'),
            'aboutUs' => asset('images/about-us'),
            'photos' => asset('images/photos'),
            'divisi' => asset('images/divisi'),
            'pengurus' => $pengurus,
            'divisi_anggota' => DivisiAnggota::all(),
            'about_us' => aboutUs::all(),
            'vision' => Vision::all(),
            'mission' => Mission::all(),
            'navbars' => Navbar::all(),
            'grid_photo' => GridPhoto::all(),
        ]);
    }

    public function Proker()
    {
        $prokers = DB::table('proker')->select('id', 'nama', 'tanggal', 'deskripsi', 'logo', 'isFinished')->orderBy('id', 'DESC')->get();
        return Inertia::render('Proker', [
            'user' => Session::has('login_key') ? Mahasiswa::where('email', Session::get('login_key'))->with(['css', 'group'])->first() : null,
            'word' => asset('images/word'),
            'prokerImg' => asset('images/proker'),
            'prokers' => $prokers,
            'prokerText' => ProkerText::all(),
            'navbars' => Navbar::all(),
        ]);
    }

    public function adminPage()
    {
        $mahasiswa = Mahasiswa::with('css')->paginate(10);
        return Inertia::render('admin/adminPage', [
            'logo' => asset('images/logo'),
            'mahasiswas' => $mahasiswa,
            'css' => CSS::all()
        ]);
    }

    public function dataUpdate($id)
    {
        $mahasiswa = Mahasiswa::find($id);
        return Inertia::render('admin/dataUpdate', [
            'id' => $id,
            'mahasiswa' => $mahasiswa
        ]);
    }

    public function doLogin(Request $request)
    {
        try {
            cas()->authenticate();
            $currentUser = cas()->getCurrentUser();

            if (cas()->isAuthenticated() && $currentUser != null) {
                $request->session()->put('login_key', $currentUser);

                DB::table("login_logs")->insert([
                    "email" => $currentUser,
                    "ip" => $request->ip(),
                    "status" => "Success",
                    "created_at" => \Carbon\Carbon::now(),
                    "updated_at" => \Carbon\Carbon::now(),
                ]);

                session()->flash('message', 'Login successful!');

                if (Mahasiswa::where('email', $currentUser)->exists()) {
                    Session::put('username', $currentUser);
                    Session::put('loginUser', TRUE);
                    return redirect('/formAspirasi');
                } else {
                    return Inertia::render('completeDataForm', [
                        'email' => $currentUser,
                        'image' => asset('images'),
                    ]);
                }
            } else {
                DB::table("login_logs")->insert([
                    "email" => null,
                    "ip" => $request->ip(),
                    "status" => "Failed",
                    "created_at" => \Carbon\Carbon::now(),
                    "updated_at" => \Carbon\Carbon::now(),
                ]);

                session()->flash('message', 'Login failed!');
                $request->session()->flush();
            }
        } catch (Exception $e) {
            $request->session()->flush();
            session()->flash('message', 'Login failed!');
            return redirect()->route('home');
        }
    }

    public function doLogout(Request $request)
    {
        try {
            $request->session()->flush();
            session()->flash('message', 'Logged out!');

            if (cas()->isAuthenticated()) {
                cas()->logout();
            }

            return redirect()->route('home');
        } catch (Exception $e) {
            $request->session()->flush();
            session()->flash('message', 'Cannot logout, please contact admin.');
            return redirect()->route('home');
        }
    }
}
