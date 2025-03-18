<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class MissionsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('missions')->delete();
        
        \DB::table('missions')->insert(array (
            0 => 
            array (
                'id' => 2,
                'misi' => 'Mengembangkan platform bagi mahasiswa untuk menyampaikan aspirasi dan kritik serta saran dalam rangka meningkatkan kesejahteraan mahasiswa Informatika, serta membentuk organisasi yang memiliki semangat yang kuat dan komitmen terhadap perubahan positif.',
                'created_at' => '2024-06-12 05:54:54',
                'updated_at' => '2024-06-12 05:54:54',
            ),
            1 => 
            array (
                'id' => 3,
                'misi' => 'Mengakomodasi kemampuan dan kompetensi mahasiswa Informatika serta anggota melalui kegiatan yang kreatif dan inovatif, dengan tujuan membentuk individu yang mampu berprestasi serta menginspirasi di ranah global.',
                'created_at' => '2024-06-12 05:55:19',
                'updated_at' => '2024-06-12 05:55:19',
            ),
            2 => 
            array (
                'id' => 4,
                'misi' => 'Menumbuhkan nilai kekeluargaan dan kebersamaan antar anggota, keluarga besar mahasiswa Informatika, serta lingkup Universitas Multimedia Nusantara, sambil menciptakan budaya organisasi yang inklusif.',
                'created_at' => '2024-06-12 05:55:27',
                'updated_at' => '2024-06-12 05:55:27',
            ),
            3 => 
            array (
                'id' => 5,
                'misi' => 'Meningkatkan derajat dan kualitas akademis dan non-akademis Program Studi Informatika, sekaligus mempersiapkan anggota untuk bersaing di tingkat global dan meraih prestasi yang mengharumkan nama prodi di tingkat internasional.',
                'created_at' => '2024-06-12 05:55:34',
                'updated_at' => '2024-06-12 05:55:34',
            ),
        ));
        
        
    }
}