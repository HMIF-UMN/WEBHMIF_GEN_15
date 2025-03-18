<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'username' => 'admin',
            'email' => 'hmif@umn.ac.id',
            'password' => "6779958fb129c03f0a0d133d64496957c359bebd3b17be04ebc0ebaa278cf8ae",
            'salt' => "f4e95f380e6edd3c4afe2ed261375d3cd729ac8ce052998f3da20b64bb6f44ad",
        ]);

    }
}
