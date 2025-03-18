<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class LinksTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('links')->delete();
        
        \DB::table('links')->insert(array (
            0 => 
            array (
                'id' => 3,
                'origin_url' => 'https://www.tiktok.com/@hmif.umn?_t=8nBGxGYTVZa&_r=1',
                'custom_url' => 'tiktok',
                'created_at' => '2024-06-14 09:04:04',
                'updated_at' => '2024-06-14 09:04:04',
            ),
            1 => 
            array (
                'id' => 4,
                'origin_url' => 'https://www.instagram.com/hmif.umn?igsh=amlqeGI4b3RzeTJm',
                'custom_url' => 'instagram',
                'created_at' => '2024-06-14 09:04:29',
                'updated_at' => '2024-06-14 09:04:29',
            ),
            2 => 
            array (
                'id' => 16,
                'origin_url' => 'https://forms.gle/zgSndEzE579vJbfPA',
                'custom_url' => 'MateriCursor',
                'created_at' => '2025-03-11 20:04:53',
                'updated_at' => '2025-03-11 20:05:14',
            ),
        ));
        
        
    }
}