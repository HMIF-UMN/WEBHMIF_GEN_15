<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CSS;

class CSSseeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        CSS::create([
            'name' => 'Typeracer',
            'date' => '9 September 2023',
            'location' => 'Kantin C UMN',
            'description' => 'Typeracer',
        ]);
        CSS::create([
            'name' => 'Basket 3x3',
            'date' => '9-10 September 2023',
            'location' => 'Lapangan basket UMN (Outdoor)',
            'description' => 'Typeracer',
        ]);
        CSS::create([
            'name' => 'Mobile Legends',
            'date' => '13-16 September 2023',
            'location' => 'Kantin C UMN',
            'description' => 'Mobile Legends',
        ]);
        CSS::create([
            'name' => 'Badminton',
            'date' => '17 & 23-24 September 2023',
            'location' => 'Lapangan D23',
            'description' => 'Badminton ganda putra dan ganda putri',
        ]);
    }
}
