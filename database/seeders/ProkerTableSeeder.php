<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ProkerTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('proker')->delete();
        
        \DB::table('proker')->insert(array (
            0 => 
            array (
                'id' => 7,
                'nama' => 'FesTIval',
                'tanggal' => '09 December 2017',
                'deskripsi' => 'FesTIval adalah festival teknologi dan informasi yang berfokus pada edukasi teknologi dan informasi melalui berbagai kegiatan seperti workshop, seminar, dan lomba.',
                'logo' => 'images/proker/01J08CHA269K711ZEKY2WSEYHJ.jpg',
                'link' => NULL,
                'isFinished' => 1,
                'created_at' => '2024-06-13 15:48:24',
                'updated_at' => '2024-06-13 16:01:45',
            ),
            1 => 
            array (
                'id' => 8,
                'nama' => 'Technofest',
                'tanggal' => '04 - 08 November 2019',
                'deskripsi' => 'Technofest adalah festival teknologi yang memberikan kesempatan bagi mahasiswa untuk memperlihatkan inovasi teknologi mereka.',
                'logo' => 'images/proker/01J08D22DN47NRYZW8P9CD4H21.jpg',
                'link' => NULL,
                'isFinished' => 1,
                'created_at' => '2024-06-13 15:57:33',
                'updated_at' => '2024-06-13 16:01:52',
            ),
            2 => 
            array (
                'id' => 9,
                'nama' => 'BIOS',
                'tanggal' => '22 October 2021',
                'deskripsi' => 'BIOS adalah seminar dan workshop yang membahas tentang teknologi terbaru dan aplikasinya dalam kehidupan sehari-hari',
                'logo' => 'images/proker/01J08D3FZPFC7ED7FECY0JF6H5.png',
                'link' => NULL,
                'isFinished' => 1,
                'created_at' => '2024-06-13 15:58:20',
                'updated_at' => '2024-06-13 16:00:52',
            ),
            3 => 
            array (
                'id' => 10,
                'nama' => 'Perkenalan Prodi Informatika 2023',
                'tanggal' => '21 - 26 August 2023',
            'deskripsi' => 'PPIF (Perkenalan Prodi) adalah kesempatan bagi mahasiswa untuk networking dan mengembangkan kemampuan berkomunikasi dengan mengenalkan program studi yang tersedia.',
                'logo' => 'images/proker/01J08D5CZ9VX5TK9BPFAXZ4G66.jpg',
                'link' => NULL,
                'isFinished' => 1,
                'created_at' => '2024-06-13 15:59:22',
                'updated_at' => '2024-06-13 16:02:08',
            ),
            4 => 
            array (
                'id' => 11,
                'nama' => 'Computer Science Shelter 2023',
                'tanggal' => '10 - 30 September 2023',
                'deskripsi' => 'CSS adalah program fun-gathering yang mengembangkan soft skill dan hard skill mahasiswa di bidang teknologi informasi serta meningkatkan solidaritas dan kekeluargaan.',
                'logo' => 'images/proker/01J08D6HDZWKNMFCG9AEB1P2QR.png',
                'link' => NULL,
                'isFinished' => 1,
                'created_at' => '2024-06-13 15:59:59',
                'updated_at' => '2024-06-13 16:02:17',
            ),
            5 => 
            array (
                'id' => 12,
                'nama' => 'UMN Tech Festival 2024',
                'tanggal' => '27 Februari - 02 Maret 2024',
                'deskripsi' => 'UTF adalah ajang untuk menampilkan inovasi teknologi terbaru yang dibuat oleh mahasiswa Fakultas Teknik & Informatika serta belajar dari sesama mahasiswa.',
                'logo' => 'images/proker/01JFAP4YN2E898VA27GR468J2M.png',
                'link' => NULL,
                'isFinished' => 1,
                'created_at' => '2024-06-13 16:00:29',
                'updated_at' => '2024-12-17 23:10:21',
            ),
            6 => 
            array (
                'id' => 13,
                'nama' => 'Perkenalan Prodi Informatika 2024',
                'tanggal' => '20 - 24 Agustus 2024',
            'deskripsi' => 'PPIF (Perkenalan Prodi) adalah kesempatan bagi mahasiswa untuk networking dan mengembangkan kemampuan berkomunikasi dengan mengenalkan program studi yang tersedia.',
                'logo' => 'images/proker/01JFAP8R5V18PYHTP6FJ2W5T4A.png',
                'link' => NULL,
                'isFinished' => 1,
                'created_at' => '2024-06-13 16:04:22',
                'updated_at' => '2024-12-17 23:12:25',
            ),
            7 => 
            array (
                'id' => 14,
                'nama' => 'Infinite 2024',
                'tanggal' => '23 November 2024',
            'deskripsi' => 'Infinite adalah acara gathering yang mempertemukan mahasiswa, dosen, dan alumni Informatika UMN dalam suasana penuh kebersamaan, khususnya untuk menyambut mahasiswa baru melalui kegiatan seru dan interaktif sebagai puncak dari rangkaian PPIF (Perkenalan Prodi))',
                'logo' => 'images/proker/01JFAQ66XYTGP4P5773CC4J3T4.png',
                'link' => NULL,
                'isFinished' => 1,
                'created_at' => '2024-12-17 23:28:31',
                'updated_at' => '2024-12-17 23:29:09',
            ),
        ));
        
        
    }
}