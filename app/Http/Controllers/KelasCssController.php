<?php

namespace App\Http\Controllers;

use App\Models\Mahasiswa;
use Illuminate\Http\Request;
use App\Models\KelasCss;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class KelasCssController extends Controller
{
    protected $apiURL = "https://script.google.com/macros/s/AKfycbzRr7A3I71oe16HaH3ItbsFn4i32iB7iKoseVK2kDdvDJy_0o-ZWfxY2oqH_5m6-z2D/exec";
    protected $data;

    public function __construct()
    {
        try {
            $response = Http::get($this->apiURL);

            if ($response->successful()) {
                $this->data = $response->json();
            }
        } catch (\Exception $e) {
            return Inertia::render('css', ['error' => $e->getMessage()]);
        }
    }

    public function index()
    {
        $registeredClasses = KelasCss::all()->pluck('kelas', 'category')->toArray();
        return Inertia::render('CSS/css', [
            'registeredClasses' => $registeredClasses
        ]);
    }

    public function getDisabledClasses()
    {
        Log::info("Fetching disabled classes");
        $kelasCsses = KelasCss::all();
        // $disabledClasses = $kelasCsses->pluck('kelas')->unique()->toArray();
        $disabledClasses = $kelasCsses->groupBy('category')
        ->map(function ($items) {
            return $items->pluck('kelas')->unique();
        });
        Log::info("Disabled classes: " . json_encode($disabledClasses));
        return response()->json($disabledClasses);
    }


    public function store(Request $request)
    {
        $request->validate([
            'kelas' => 'required',
            'category' => 'required',
        ]);

        $existingRegistration = KelasCss::where('kelas', $request->kelas)
            ->where('category', $request->category)
            ->first();

        if ($existingRegistration) {
            // Memberikan respon dengan pesan error
            return Inertia::render('CSS/css', [
                'error' => 'Kelas sudah terdaftar untuk kategori ini.'
            ]);
        }

        $kelasCss = new KelasCss;
        $kelasCss->kelas = $request->kelas;
        $kelasCss->category = $request->category;
        $kelasCss->mark = true;
        $kelasCss->save();

        return to_route('CSS');
    }
}
