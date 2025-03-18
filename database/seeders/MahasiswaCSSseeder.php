<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Mahasiswa_CSS;

class MahasiswaCSSseeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Mahasiswa_CSS::create([
            'mahasiswa' => 1,
            'css' => 1
        ]);
        Mahasiswa_CSS::create([
            'mahasiswa' => 1,
            'css' => 2,
            'group' => 1
        ]);
        Mahasiswa_CSS::create([
            'mahasiswa' => 1,
            'css' => 3,
            'group' => 2
        ]);
        Mahasiswa_CSS::create([
            'mahasiswa' => 1,
            'css' => 4,
            'group' => 3
        ]);
    }
}
