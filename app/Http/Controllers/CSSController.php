<?php

namespace App\Http\Controllers;

use App\Models\Ctf;
use App\Models\Mahasiswa;
use Inertia\Inertia;
use App\Mail\FormDataMail;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;


// use App\Models\Mahasiswa;


// use App\Models\Mahasiswa_CSS;
// use App\Models\CSSGroup;

class CSSController extends Controller
{
    protected $apiURL = "https://script.google.com/macros/s/AKfycbzRr7A3I71oe16HaH3ItbsFn4i32iB7iKoseVK2kDdvDJy_0o-ZWfxY2oqH_5m6-z2D/exec";
    protected $data;

    public function __construct()
    {
        try {
            $response = Http::get($this->apiURL);

            if ($response->successful()) {
                $this->data = $response->json();
                if ($this->data == null) {
                    $this->data = "";
                }
            }
        } catch (\Exception $e) {
            return Inertia::render('css', ['error' => $e->getMessage()]);
        }
    }

    public function index()
    {
        return Inertia::render('CSS/css', [
            'images' => asset('CSS/images'),
            'logo' => asset('images/logo'),
            // 'user' => "ganteng@test.com",
            'user' => Session::get('username'),
            'teamData' => $this->data
        ]);
    }

    public function form($rj, $category)
    {

        return Inertia::render('CSS/FormLomba', [
            'user' => Session::get('username'),
            // 'user' => "ganteng@test.com",
            'rj' => $rj,
            'category' => $category
        ]);
    }

    public function formGet()
    {
        try {
            $response = Http::get($this->apiURL);

            if ($response->successful()) {
                $data = $response->json();

                return Inertia::render('testFormCSS', ['response' => $data, 'email' => Session::get('username')]);
            } else {
                return Inertia::render('testFormCSS', ['error' => 'Request Failed']);
            }
        } catch (\Exception $e) {
            return Inertia::render('testFormCSS', ['error' => $e->getMessage()]);
        }
    }

    public function frontEndForm()
    {
        return Inertia::render('FormLomba');
    }

    public function frontEndFormKedua()
    {
        return Inertia::render('TesFormLomba2');
    }

    public function regisCheck()
    {
        return Inertia::render('RegistrationTest');
    }

    public function getCurrentData()
    {
        if ($this->data) {
            return response()->json($this->data);
        } else {
            return response()->json(['error' => 'No data available'], 404);
        }
    }

    public function formPost(Request $request)
    {
        $validatedData = $request->validate([
            'referenceCode' => 'nullable|string',
            'teamName' => 'nullable|string',
            'nama' => 'required|string',
            'email' => 'required|email',
            'idLine' => 'required|string',
            'noTelp' => 'required|string',
            'nim' => 'required|string',
            'angkatan' => 'required|string',
            'kelas' => 'nullable|string',
            'lomba' => 'required|string',
            'userNameML' => 'nullable|string',
            'medicalHistory' => 'required|string'
        ]);

        $class = $validatedData['kelas'];
        if ($validatedData['referenceCode'] == "") {
            $generatedCode = $this->generateRefCode(8);
            $validatedData['referenceCode'] = $generatedCode;
        } else {
            $generatedCode = $validatedData['referenceCode'];
        }

        $registerCheck = new CSSRegisterCheckController($this->data);

        $canRegister = $registerCheck->canRegister(
            $validatedData['lomba'],
            $generatedCode,
            $validatedData['angkatan'],
            $validatedData['kelas']
        );

        if (!$canRegister['status']) {
            return back()->with('message', $canRegister['message'])->with('canRegister', $canRegister['status']);
        }

        $data = [
            'sheetNumber' => $this->getSheetNumber($validatedData['lomba']),
            'referenceCode' => $generatedCode,
            'teamName' => $validatedData['teamName'],
            'fullName' => $validatedData['nama'],
            'emailAddress' => $validatedData['email'],
            'lineId' => $validatedData['idLine'],
            'phoneNumber' => $validatedData['noTelp'],
            'studentId' => $validatedData['nim'],
            'classOf' => $validatedData['angkatan'],
            'classChar' => $validatedData['kelas'],
            'accountUsername' => $validatedData['userNameML'] ?? null,
            'medicalHistory' => $validatedData['medicalHistory'],
            'lomba' => $validatedData['lomba']
        ];


        try {
            $response = Http::post($this->apiURL, $data);

            if ($response->successful()) {
                Mail::to($data['emailAddress'])->send(new FormDataMail($data));
                return redirect()->back()->with('message', $response->body());
            } else {
                return response()->json(['status' => false, 'message' => 'Failed to submit data: ' . $response->body()], 400);
            }
        } catch (\Exception $e) {
            return response()->json(['status' => false, 'message' => 'An error occurred: ' . $e->getMessage()], 500);
        }

    }


    private function updateLocalData($competition, $newData)
    {
        $this->data['data'][$competition][] = $newData;
        if (!isset($this->data['team'][$competition])) {
            $this->data['team'][$competition] = 1;
        } else {
            $this->data['team'][$competition]++;
        }
    }


    private function getSheetNumber($lombaId)
    {
        $lombaSheetNumbers = [
            'Futsal' => 1,
            'Basket' => 2,
            'MobileLegends' => 3,
            'BadmintonP' => 4,
            "BadmintonC" => 5
        ];

        return $lombaSheetNumbers[$lombaId] ?? null;
    }

    private function generateRefCode($length)
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

    // public function daftar(Request $request)
    // {
    //     try {
    //         if (Mahasiswa::where('email', Session::get('login_key'))->first()->jurusan == 'Informatika') {
    //             $lomba = $request->lomba;
    //             $idLomba = $this->IDLomba($lomba);

    //             $mahasiswaCSS = Mahasiswa_CSS::create([
    //                 'mahasiswa' =>  Mahasiswa::where('email', Session::get('login_key'))->first()->id,
    //                 'css' => $idLomba,
    //                 'group' => null
    //             ]);

    //             session()->flash('message', 'Registered Successfully!');

    //             return redirect('/formAspirasi');
    //         }

    //         session()->flash('message', 'Failed to register! Informatics student only event!');

    //         return redirect('/');
    //     } catch (Exception $e) {
    //         session()->flash('message', 'Error occured, please try again!');

    //         return redirect('/');
    //     }
    // }


    // public function daftarTim(Request $request)
    // {
    //     try {
    //         $teamName = $request->team_name;
    //         $contact = $request->line;
    //         $type = $request->type;

    //         if ($teamName == null || $contact == null) {
    //             session()->flash('message', 'Registration cancelled! Fill in the fields!');

    //             return redirect('/cssIF');
    //         }

    //         $idLomba = $this->IDLomba($type);
    //         $limit = CSSGroup::where('type', $type)->get()->count();
    //         $total = $this->totalCSSGroup($type);
    //         $mahasiswa = Mahasiswa::where('email', Session::get('login_key'))->first();

    //         if ($mahasiswa->jurusan != 'Informatika') {
    //             session()->flash('message', 'Failed to register! Informatics student only event!');

    //             return redirect('/cssIF');
    //         }

    //         if ($limit < $total) {
    //             $CSSGroup = CSSGroup::create([
    //                 'name' => $teamName,
    //                 'contact' => $contact,
    //                 'secret' => substr(md5(mt_rand()), 0, 16),
    //                 'type' => $type
    //             ]);

    //             $mahasiswaCSS = Mahasiswa_CSS::create([
    //                 'mahasiswa' =>  $mahasiswa->id,
    //                 'css' => $idLomba,
    //                 'group' => $CSSGroup->id
    //             ]);

    //             session()->flash('message', 'Registered Successfully! ' . $CSSGroup->name);

    //             return redirect('/cssIF');
    //         } else {
    //             session()->flash('message', 'Registration Limit Exceeded!');

    //             return redirect('/cssIF');
    //         }
    //     } catch (Exception $e) {
    //         session()->flash('message', 'Error occured, please try again!');

    //         return redirect('/cssIF');
    //     }
    // }


    // public function joinTim(Request $request)
    // {
    //     try {
    //         if (Mahasiswa::where('email', Session::get('login_key'))->first()->jurusan != 'Informatika') {
    //             session()->flash('message', 'Failed to register! Informatics student only event!');

    //             return redirect('/cssIF');
    //         }

    //         $teamCode = $request->team_code;

    //         if ($teamCode == null) {
    //             session()->flash('message', 'Registration cancelled! Fill in the fields!');

    //             return redirect('/cssIF');
    //         }

    //         $group = CSSGroup::where('secret', $teamCode)->first();
    //         $type = $this->typeFormatter($group->type);

    //         if ($group) {
    //             $countMember = Mahasiswa_CSS::where([
    //                 'css' => $type,
    //                 'group' => $group->id
    //             ])->get()->count();

    //             if (($type == 2 && $countMember >= 4) || ($type == 3 && $countMember >= 6) || ($type == 4 && $countMember == 2)) {
    //                 session()->flash('message', 'Failed to join team ' . $group->name . '. Due to maximum member limit reached!');

    //                 return redirect('/cssIF');
    //             }

    //             $mahasiswa = Mahasiswa::where('email', Session::get('login_key'))->first();

    //             $mahasiswaCSS = Mahasiswa_CSS::create([
    //                 'mahasiswa' =>  $mahasiswa->id,
    //                 'css' => $this->typeFormatter($group->type),
    //                 'group' => $group->id
    //             ]);

    //             session()->flash('message', 'Registered Successfully! Team: ' . $group->name);

    //             return redirect('/cssIF');
    //         }

    //         session()->flash('message', 'Code not found!');

    //         return redirect('/cssIF');
    //     } catch (Exception $e) {
    //         session()->flash('message', 'Error occured, please try again!');

    //         return redirect('/cssIF');
    //     }
    // }

    // public function IDLomba($lomba)
    // {
    //     if (strtolower($lomba) == 'typeracer') {
    //         return 1;
    //     } else {
    //         return $lomba;
    //     }
    // }

    // public function typeFormatter($type)
    // {
    //     if ($type == '1') {
    //         return 1;
    //     } else if ($type == '2') {
    //         return 2;
    //     } else if ($type == '3') {
    //         return 3;
    //     } else {
    //         return 4;
    //     }
    // }

    // public function totalCSSGroup($type)
    // {
    //     if ($type == '1') {
    //         return 1000;
    //     } else if ($type == '2') {
    //         return 16;
    //     } else if ($type == '3') {
    //         return 32;
    //     } else {
    //         return 16;
    //     }
    // }

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
                    return redirect('/cssIF');
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
