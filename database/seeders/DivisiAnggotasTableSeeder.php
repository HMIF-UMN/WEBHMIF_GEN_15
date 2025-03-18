<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DivisiAnggotasTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('divisi_anggotas')->delete();
        
        \DB::table('divisi_anggotas')->insert(array (
            0 => 
            array (
                'id' => 1,
                'nama_divisi' => 'Badan Pengurus Harian',
                'image' => 'images/divisi/01J08DPCJYWA26MGYX558K0B1Z.webp',
                'anggota' => 'Gerald Imanuel Wijaya • Alfonsus Vega HT • Jefer Setiawan • Chelsea Arantza',
                'created_at' => '2024-06-11 16:54:45',
                'updated_at' => '2024-06-13 16:08:39',
            ),
            1 => 
            array (
                'id' => 3,
                'nama_divisi' => 'Creative & Design',
                'image' => 'images/divisi/01J08DPY42D4R1V9228EBP6TJ3.webp',
                'anggota' => 'Rivo Juicer Wowor • Frendhy Zhuang • Amanda Citra Dewanti • Ari Maulana • Maulidya Isnaini • Jonathan Christian Gunawan',
                'created_at' => '2024-06-12 22:27:21',
                'updated_at' => '2024-06-13 16:08:57',
            ),
            2 => 
            array (
                'id' => 4,
                'nama_divisi' => 'Research & Development',
                'image' => 'images/divisi/01J08WT4DB04HW51RA0P9D854B.webp',
                'anggota' => 'Kevin Sorensen • Henry Salim • Arvin Winardi • Christian Ivan Wibowo • Michael Tio • Alvianda Chairofta • Nathan Angelo S • Jonathan Susanto • Nathanael Axl J',
                'created_at' => '2024-06-12 22:27:39',
                'updated_at' => '2024-06-13 20:32:50',
            ),
            3 => 
            array (
                'id' => 5,
                'nama_divisi' => 'Public Relations',
                'image' => 'images/divisi/01J70WJ9HHH6EQ2W4P2RRTMA60.png',
                'anggota' => 'Charel Rosabel • Nataniel Tambayung • Sharon Tionardi • Ryan Chandiari • Hosea Dunatus S • Steve Christian YP • Austin Gilbert L • Descellia Ng • Fellisca Veren • Bryan',
                'created_at' => '2024-06-12 22:28:03',
                'updated_at' => '2024-09-05 17:44:30',
            ),
            4 => 
            array (
                'id' => 6,
                'nama_divisi' => 'Project Manager',
                'image' => 'images/divisi/01J1SZE39WCZG0N3KGF6C3KNDM.webp',
                'anggota' => 'Marthin Riyaldo SK • Vika Gisella • Felix Rafael • Michael Aditius • Russel Shivah • Aaron Kho • Theresia Glory E • Vedian Bunka • Wian Sanjaya',
                'created_at' => '2024-06-12 22:28:20',
                'updated_at' => '2024-07-02 22:01:29',
            ),
        ));
        
        
    }
}