<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class HomeCarouselsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('home_carousels')->delete();
        
        \DB::table('home_carousels')->insert(array (
            0 => 
            array (
                'id' => 9,
                'image' => 'images/home/01J3B0WXQDSKAWA1P6G0ECYQJG.webp',
                'created_at' => '2024-06-13 13:31:47',
                'updated_at' => '2024-07-21 23:09:50',
            ),
            1 => 
            array (
                'id' => 10,
                'image' => 'images/home/01J084QM2KG37DF2NF8WGP3JM0.jpg',
                'created_at' => '2024-06-13 13:32:02',
                'updated_at' => '2024-06-13 13:32:02',
            ),
            2 => 
            array (
                'id' => 11,
                'image' => 'images/home/01J084QYKAZ77YCV5YWDQGK7JY.jpg',
                'created_at' => '2024-06-13 13:32:13',
                'updated_at' => '2024-06-13 13:32:13',
            ),
            3 => 
            array (
                'id' => 12,
                'image' => 'images/home/01J084R7A1W25B20Q9F2E3DCX0.jpg',
                'created_at' => '2024-06-13 13:32:22',
                'updated_at' => '2024-06-13 13:32:22',
            ),
            4 => 
            array (
                'id' => 13,
                'image' => 'images/home/01J084RFQXMW2A114037DVDNJJ.jpg',
                'created_at' => '2024-06-13 13:32:30',
                'updated_at' => '2024-06-13 13:32:30',
            ),
        ));
        
        
    }
}