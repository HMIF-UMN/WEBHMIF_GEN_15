<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class HomesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('homes')->delete();
        
        \DB::table('homes')->insert(array (
            0 => 
            array (
                'id' => 1,
                'titleWhite' => 'We Are',
                'titleBlue' => 'HMIF UMN',
                'description' => 'Selamat datang di website resmi HMIF UMN! Kami adalah Himpunan Mahasiswa Teknik Informatika Universitas Multimedia Nusantara, atau dikenal sebagai HMIF UMN. Sebagai organisasi yang mewadahi mahasiswa Teknik Informatika di UMN, HMIF UMN memiliki tujuan untuk mengembangkan dan meningkatkan kualitas serta kemampuan mahasiswa dalam bidang teknologi dan informatika.',
                'taglineUpper' => 'Create, Innovate, ',
                'taglineBottom' => 'Collaborate',
                'tagDesc' => 'Sebagai bagian dari misi kami, HMIF mengadopsi tagline yang mencerminkan nilai dan tujuan dibentuknya HMIF: Create, Innovate, Collaborate. Tiga kata ini mewakili komitmen HMIF untuk membentuk',
                'created_at' => '2024-06-11 22:57:48',
                'updated_at' => '2024-09-15 13:13:55',
            ),
        ));
        
        
    }
}