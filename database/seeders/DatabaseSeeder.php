<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)->create();
        \App\Models\homePage::factory(10)->create();

        // $this->call([
        //     GenPengurusSeeder::class,
        //     DivisiSeeder::class,
        //     UserSeeder::class,
        //     ProkerSeeder::class,
        //     PengurusSeeder::class,
        //     CSSseeder::Class,
        //     MahasiswaSeeder::Class,
        //     CSSGroupSeeder::class,
        //     MahasiswaCSSseeder::class,
        // ]);
    }
}
