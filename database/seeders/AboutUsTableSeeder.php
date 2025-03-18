<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class AboutUsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('about_us')->delete();
        
        \DB::table('about_us')->insert(array (
            0 => 
            array (
                'id' => 1,
                'title1' => 'An UMN’s Informatics Student Association',
                'title2' => 'By IF Student,',
                'title3' => 'For IF Student.',
                'title4' => 'HMIF UMN hadir sebagai wadah untuk mahasiswa informatika UMN belajar dan berkarya bersama demi kemajuan teknologi dan masyarakat. HMIF memiliki visi untuk mengembangkan potensi dan memperkuat solidaritas sesama mahasiswa informatika UMN.',
                'title5' => 'Founded as HIMTI in 2010, now HMIF has empowering 1000+ Informatics students and Alumnus from UMN.',
                'created_at' => '2024-06-12 05:06:21',
                'updated_at' => '2024-06-12 05:09:52',
            ),
        ));
        
        
    }
}