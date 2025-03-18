<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Mahasiswa;

class MahasiswaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Mahasiswa::create([
            'NIM' => '00000045651',
            'email' => 'vallencius.siswanto@student.umn.ac.id',
            'name' => 'Vallencius Gavriel Alfredo Siswanto',
            'angkatan' => 2020,
            'jurusan' => 'Informatika',
        ]);
    }
}
