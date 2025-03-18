<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class VisionsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('visions')->delete();
        
        \DB::table('visions')->insert(array (
            0 => 
            array (
                'id' => 1,
                'visi' => 'Menjadikan Himpunan Mahasiswa Informatika sebagai teladan bagi mahasiswa dan seluruh lingkungan Program Studi Informatika serta membangun komunitas yang berwawasan global, inovatif, kreatif, dan menjunjung tinggi semangat kekeluargaan dalam bidang akademis dan non-akademis.',
                'created_at' => '2024-06-12 05:34:39',
                'updated_at' => '2024-06-12 22:30:31',
            ),
        ));
        
        
    }
}