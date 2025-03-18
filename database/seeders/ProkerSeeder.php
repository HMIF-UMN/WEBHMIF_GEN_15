<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Proker;

class ProkerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Proker::create([
            'nama' => 'FesTIval 2017',
            'tanggal' => '09 December 2017',
            'deskripsi' => 'FesTIval adalah festival teknologi dan informasi yang berfokus pada edukasi teknologi dan informasi melalui berbagai kegiatan seperti workshop, seminar, dan lomba.',
            'logo' => 'festival.jpg',
            'isFinished' => true
        ]);

        Proker::create([
            'nama' => 'Technofest 2019',
            'tanggal' => '04 - 08 November 2019',
            'deskripsi' => 'Technofest adalah festival teknologi yang memberikan kesempatan bagi mahasiswa untuk memperlihatkan inovasi teknologi mereka.',
            'logo' => 'technofest.jpg',
            'isFinished' => true
        ]);

        Proker::create([
            'nama' => 'BIOS 2021',
            'tanggal' => '22 October 2021',
            'deskripsi' => 'BIOS adalah seminar dan workshop yang membahas tentang teknologi terbaru dan aplikasinya dalam kehidupan sehari-hari.',
            'logo' => 'BIOS.png',
            'isFinished' => true
        ]); 
        
        Proker::create([
            'nama' => 'Perkenalan Prodi Informatika 2023',
            'tanggal' => '23 - 25 August 2023',
            'deskripsi' => 'PPIF (Perkenalan Prodi) adalah kesempatan bagi mahasiswa untuk networking dan mengembangkan kemampuan berkomunikasi dengan mengenalkan program studi yang tersedia.',
            'logo' => 'ppif.jpg',
            'isFinished' => true
        ]);

        Proker::create([
            'nama' => 'Computer Science Shelter 2023',
            'tanggal' => '07 - 09 September 2023',
            'deskripsi' => 'CSS adalah program fun-gathering yang mengembangkan soft skill dan hard skill mahasiswa di bidang teknologi informasi serta meningkatkan solidaritas dan kekeluargaan.',
            'logo' => 'comingsoon.avif',
            'isFinished' => true
        ]);

        Proker::create([
            'nama' => 'UMN Tech Festival 2023',
            'tanggal' => '05 - 07 August 2023',
            'deskripsi' => 'UTF adalah ajang untuk menampilkan inovasi teknologi terbaru yang dibuat oleh mahasiswa Fakultas Teknik & Informatika serta belajar dari sesama mahasiswa.',
            'logo' => 'umntechfes.jpg',
            'isFinished' => true
        ]);

        Proker::create([
            'nama' => 'UMN Tech Festival 2024',
            'tanggal' => '27 February - 02 March 2024',
            'deskripsi' => 'UMN Tech Festival (UTF): Unleashing Tech Through Collaboration, sebuah event teknologi yang yang merayakan kolaborasi di antara individu, perusahaan, dan komunitas di bidang teknologi. UTF 2024 mempunyai dua main event yaitu Exhibition dan Workshop dimana orang-orang bisa mendapatkan insight baru mengenai teknologi baik melalui exhibition maupun workshop',
            'logo' => 'umntechfes.jpg',
            'isFinished' => true
        ]);

        Proker::create([
            'nama' => 'CodeXpo 2024',
            'tanggal' => '13 - 15 May 2024',
            'deskripsi' => 'CodeXpo 2024 merupakan event pameran dimana mahasiswa informatika tingkat pertama  dapat memamerkan project website mereka kepada publik. Tujuan dari CodeXpo 2024 ini sendiri adalah agar mahasiswa informatika bisa melihat karya mahasiswa informatika lainya dan sebagai penilaian Ujian Akhir Semester mahasiswa tingkat pertama.',
            'logo' => 'comingsoon.avif',
            'isFinished' => false
        ]);

        Proker::create([
            'nama' => 'HMIF Night 2024',
            'tanggal' => '20 May 2024',
            'deskripsi' => 'HMIF Night merupakan sebuah event bonding bagi anggota kepengurusan Himpunan Mahasiswa Informatika (HMIF). Tujuan dari diadakan event ini agar lebih mempererat hubungan antar anggota HMIF menciptakan lingkungan kerja yang sehat antar tiap anggota.',
            'logo' => 'hmif.jpg',
            'isFinished' => false
        ]);

        Proker::create([
            'nama' => 'IF Gathering 2024',
            'tanggal' => '24 August 2024',
            'deskripsi' => 'IF Gathering merupakan event berskala prodi, dimana event ini diperuntukan untuk semua mahasiswa program studi Informatika. Pada event ini Mahasiswa Informatika akan saling mempererat hubungan baik antar sesama angkatan maupun berbeda angkatan. Kegiatan yang akan dilakukan dalam IF Gathering ini meliputi acara bonding, mini awards serta evaluasi.',
            'logo' => 'comingsoon.avif',
            'isFinished' => false
        ]);

        Proker::create([
            'nama' => 'Computer Science Shelter 2024',
            'tanggal' => '09 September 2024',
            'deskripsi' => 'CSS adalah program fun-gathering yang mengembangkan soft skill dan hard skill mahasiswa di bidang teknologi informasi serta meningkatkan solidaritas dan kekeluargaan.',
            'logo' => 'comingsoon.avif',
            'isFinished' => false
        ]);
    }
}
