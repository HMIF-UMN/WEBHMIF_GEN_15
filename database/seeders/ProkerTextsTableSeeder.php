<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ProkerTextsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('proker_texts')->delete();
        
        \DB::table('proker_texts')->insert(array (
            0 => 
            array (
                'id' => 1,
                'description' => 'HMIF memiliki tiga program kerja utama: Perkenalan Prodi Informatika, CSS, dan UTF. Perkenalan prodi adalah kesempatan bagus bagi mahasiswa untuk networking dan mengembangkan kemampuan berkomunikasi. Sementara itu, CSS merupakan program fun-gathering yang bertujuan mengembangkan soft skill dan hard skill di bidang teknologi informasi, dan meningkatkan solidaritas dan kekeluargaan. UTF adalah program yang menampilkan inovasi teknologi terbaru dari mahasiswa Teknik Informatika, serta menjadi ajang bagi mahasiswa untuk memamerkan hasil karya mereka dalam bidang teknologi.
',
                'created_at' => '2024-06-12 09:13:54',
                'updated_at' => '2024-06-13 12:48:44',
            ),
        ));
        
        
    }
}