<?php

namespace Database\Seeders;

use App\Models\GenPengurus;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GenPengurusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        GenPengurus::create([
            'gen' => 'GEN XIII',
        ]);

        GenPengurus::create([
            'gen' => 'GEN XIV',
        ]);
    }
}
