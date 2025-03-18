<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CSSGroup;

class CSSGroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        CSSGroup::create([
            'name' => 'Tim Sukses',
            'contact' => '08123456789',
            'secret' => 'ASDASDASDQWEQWEQWE123123',
            'type' => '2'
        ]);

        CSSGroup::create([
            'name' => 'Tim Ayam',
            'contact' => '08123456788',
            'secret' => 'ASDASDASDQWEQWEQWE123123',
            'type' => '3'
        ]);

        CSSGroup::create([
            'name' => 'Tanpa Tanpa',
            'contact' => '08123456782',
            'secret' => 'ASDASDASDQWEQWEQWE',
            'type' => '4a'
        ]);

        CSSGroup::create([
            'name' => 'Tim Hore',
            'contact' => '08123456787',
            'secret' => 'ASDASDASDQWEQWEQWE123123',
            'type' => '4i'
        ]);

        CSSGroup::create([
            'name' => 'Nameless',
            'contact' => '08123456781',
            'secret' => 'ASDASDASDQWEQWEQWE',
            'type' => '4i'
        ]);
    }
}
