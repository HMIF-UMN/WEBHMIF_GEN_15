<?php

namespace Database\Seeders;

use App\Models\GenPengurus;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Divisi;

class DivisiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Divisi::create([
            'nama' => 'Badan Pengurus Harian',
            'singkatan' => 'BPH',
            'deskripsi' => 'BPH adalah...',
            'logo' => 'BPH.svg',
            'gen_id' => GenPengurus::where('gen', 'GEN XIII')->first()->id
        ]);

        Divisi::create([
            'nama' => 'Community Outreach',
            'singkatan' => 'CO',
            'deskripsi' => 'CO adalah...',
            'logo' => 'CO.svg',
            'gen_id' => GenPengurus::where('gen', 'GEN XIII')->first()->id
        ]);

        Divisi::create([
            'nama' => 'Creative',
            'singkatan' => 'CR',
            'deskripsi' => 'CR adalah...',
            'logo' => 'CR.svg',
            'gen_id' => GenPengurus::where('gen', 'GEN XIII')->first()->id
        ]);

        Divisi::create([
            'nama' => 'Public Relation',
            'singkatan' => 'PR',
            'deskripsi' => 'PR adalah...',
            'logo' => 'PR.svg',
            'gen_id' => GenPengurus::where('gen', 'GEN XIII')->first()->id
        ]);

        Divisi::create([
            'nama' => 'Research & Development',
            'singkatan' => 'R&D',
            'deskripsi' => 'R&D adalah...',
            'logo' => 'R_D.svg',
            'gen_id' => GenPengurus::where('gen', 'GEN XIII')->first()->id
        ]);

        Divisi::create([
            'nama' => 'Task Force',
            'singkatan' => 'TF',
            'deskripsi' => 'TF adalah...',
            'logo' => 'TF.svg',
            'gen_id' => GenPengurus::where('gen', 'GEN XIII')->first()->id
        ]);

        Divisi::create([
            'nama' => 'Badan Pengurus Harian',
            'singkatan' => 'BPH',
            'deskripsi' => 'BPH adalah...',
            'logo' => 'BPH.svg',
            'gen_id' => GenPengurus::where('gen', 'GEN XIV')->first()->id
        ]);

        Divisi::create([
            'nama' => 'Creative',
            'singkatan' => 'CR',
            'deskripsi' => 'CR adalah...',
            'logo' => 'CR.svg',
            'gen_id' => GenPengurus::where('gen', 'GEN XIV')->first()->id
        ]);

        Divisi::create([
            'nama' => 'Public Relation',
            'singkatan' => 'PR',
            'deskripsi' => 'PR adalah...',
            'logo' => 'PR.svg',
            'gen_id' => GenPengurus::where('gen', 'GEN XIV')->first()->id
        ]);

        Divisi::create([
            'nama' => 'Research & Development',
            'singkatan' => 'R&D',
            'deskripsi' => 'R&D adalah...',
            'logo' => 'R_D.svg',
            'gen_id' => GenPengurus::where('gen', 'GEN XIV')->first()->id
        ]);

        Divisi::create([
            'nama' => 'Project Manager',
            'singkatan' => 'PM',
            'deskripsi' => 'PM adalah...',
            'logo' => 'PM.svg',
            'gen_id' => GenPengurus::where('gen', 'GEN XIV')->first()->id
        ]);
    }
}
