<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Pengurus;
use Illuminate\Support\Facades\DB;

class PengurusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        GEN 13
        Pengurus::create([
            'nama' => 'Antonius Kevin B.S',
            'jabatan' => 'Ketua',
            'image' => 'BPH - Antonius Kevin.webp',
            'id_divisi' => 1,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Gerald Imanuel Wijaya',
            'jabatan' => 'Wakil Ketua',
            'image' => 'BPH - Gerald Imanuel.webp',
            'id_divisi' => 1,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Tesalonika Abigail',
            'jabatan' => 'Sekretaris Bendahara 1',
            'image' => 'BPH - Tesa.webp',
            'id_divisi' => 1,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Jefer Setiawan',
            'jabatan' => 'Sekretaris Bendahara 2',
            'image' => 'BPH - Jefer Setiawan.webp',
            'id_divisi' => 1,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Jezreel Kosasih',
            'jabatan' => 'Koordinator',
            'image' => 'CO - Jezreel Kosasih.webp',
            'id_divisi' => 2,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Edward Nathan Samuel',
            'jabatan' => 'Wakil Koordinator',
            'image' => 'CO - Edward Nathan Samuel.webp',
            'id_divisi' => 2,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Daffa Muflih Purnama',
            'jabatan' => 'Anggota',
            'image' => 'CO - Daffa Muflih.webp',
            'id_divisi' => 2,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Vianca Vanesia Barhan',
            'jabatan' => 'Anggota',
            'image' => 'CO - Vianca.webp',
            'id_divisi' => 2,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Agil Wira Pratama',
            'jabatan' => 'Anggota',
            'image' => 'CO - Agil Wira Pratama.webp',
            'id_divisi' => 2,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Marselino Lengyu Pantouw',
            'jabatan' => 'Anggota',
            'image' => 'CO - Marselino.webp',
            'id_divisi' => 2,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Jhonnes Fernando',
            'jabatan' => 'Anggota',
            'image' => 'CO - Jhonnes Fernando.webp',
            'id_divisi' => 2,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Rivo Juicer Wowor',
            'jabatan' => 'Koordinator',
            'image' => 'CR - Rivo.webp',
            'id_divisi' => 3,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Amanda Citra Dewanti',
            'jabatan' => 'Wakil Koordinator',
            'image' => 'CR - ACD.webp',
            'id_divisi' => 3,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Jonathan Setyohadi',
            'jabatan' => 'Anggota',
            'image' => 'CR - Jonathan.webp',
            'id_divisi' => 3,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Joshua Hotama',
            'jabatan' => 'Anggota',
            'image' => 'CR - Joshua.webp',
            'id_divisi' => 3,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Ari Maulana Hadijaya',
            'jabatan' => 'Anggota',
            'image' => 'CR - Ari.webp',
            'id_divisi' => 3,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Nataniel Tambayung',
            'jabatan' => 'Anggota',
            'image' => 'CR - Natan.webp',
            'id_divisi' => 3,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Damar Nur Rafly',
            'jabatan' => 'Anggota',
            'image' => 'CR - Damar.webp',
            'id_divisi' => 3,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Putra Aldo Oswald',
            'jabatan' => 'Koordinator',
            'image' => 'PR - Putra Aldo Oswald.webp',
            'id_divisi' => 4,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Ela Setiorini',
            'jabatan' => 'Anggota',
            'image' => 'PR - Ela.webp',
            'id_divisi' => 4,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Muhammad Lutfi Salinggih',
            'jabatan' => 'Anggota',
            'image' => 'PR - Muhammad Lutfi Salinggih.webp',
            'id_divisi' => 4,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => "Nisa'ul Fadhilah",
            'jabatan' => 'Anggota',
            'image' => 'PR - Nisaul.webp',
            'id_divisi' => 4,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'William Lo Channiko',
            'jabatan' => 'Anggota',
            'image' => 'PR - William Lo Channiko.webp',
            'id_divisi' => 4,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Devin Kurnia',
            'jabatan' => 'Anggota',
            'image' => 'PR - Devin Kurnia.webp',
            'id_divisi' => 4,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Vallencius Gavriel Alfredo Siswanto',
            'jabatan' => 'Koordinator',
            'image' => 'RD - Vallen.webp',
            'id_divisi' => 5,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Christian Ivan Wibowo',
            'jabatan' => 'Wakil Koordinator',
            'image' => 'RD - Christian Ivan Wibowo.webp',
            'id_divisi' => 5,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Darren Lionardo',
            'jabatan' => 'Anggota',
            'image' => 'RD - Darren Lionardo.webp',
            'id_divisi' => 5,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Michael Immanuel Herijanto',
            'jabatan' => 'Anggota',
            'image' => 'placeholder.webp',
            // 'image' => 'RD - Michael Immanuel He,
            //'gen_idrijanto.webp', = DB::self::table('gen_pengurus)->where('gen
            'id_divisi' => 5,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Kevin Sorensen',
            'jabatan' => 'Anggota',
            'image' => 'RD - Kevin Sorensen.webp',
            'id_divisi' => 5,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Elisabeth Lauren',
            'jabatan' => 'Anggota',
            'image' => 'RD - ElisabethLauren.webp',
            'id_divisi' => 5,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Michael Tio',
            'jabatan' => 'Anggota',
            'image' => 'RD - MichaelTio.webp',
            'id_divisi' => 5,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Steven Geraldi',
            'jabatan' => 'Koordinator',
            'image' => 'TF - Steven Geraldi.webp',
            'id_divisi' => 6,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Aaron Kho',
            'jabatan' => 'Wakil Koordinator',
            'image' => 'TF - Aaron.webp',
            'id_divisi' => 6,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Ivandy Wijaya',
            'jabatan' => 'Anggota',
            'image' => 'TF - Ivandy Wijaya.webp',
            'id_divisi' => 6,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Nicholas Aprileus Sukhadda',
            'jabatan' => 'Anggota',
            'image' => 'TF - Nicholas Sukhadda.webp',
            'id_divisi' => 6,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Michael Aditya',
            'jabatan' => 'Anggota',
            'image' => 'TF - Michael Aditya.webp',
            'id_divisi' => 6,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Reynaldo',
            'jabatan' => 'Anggota',
            'image' => 'TF - Reynaldo.webp',
            'id_divisi' => 6,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIII')->first()->id
        ]);

//        GEN 14
        Pengurus::create([
            'nama' => 'Gerald Imanuel Wijaya',
            'jabatan' => 'Ketua',
            'image' => 'BPH - Gerald Imanuel.webp',
            'id_divisi' => 7,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Alfonsus Vega HT',
            'jabatan' => 'Wakil Ketua',
            'image' => 'placeholder.webp',
            'id_divisi' => 7,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Jefer Setiawan',
            'jabatan' => 'Sekretaris',
            'image' => 'BPH - Jefer Setiawan.webp',
            'id_divisi' => 7,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Chelsea Arantza Phoebe',
            'jabatan' => 'Bendahara',
            'image' => 'placeholder.webp',
            'id_divisi' => 7,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Kevin Sorensen',
            'jabatan' => 'Koordinator',
            'image' => 'RD - Kevin Sorensen.webp',
            'id_divisi' => 10,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Henry Salim',
            'jabatan' => 'Wakil Koordinator',
            'image' => 'placeholder.webp',
            'id_divisi' => 10,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Michael Tio',
            'jabatan' => 'Anggota',
            'image' => 'RD - MichaelTio.webp',
            'id_divisi' => 10,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Christian Ivan Wibowo',
            'jabatan' => 'Anggota',
            'image' => 'RD - Christian Ivan Wibowo.webp',
            'id_divisi' => 10,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Arvin Winardi',
            'jabatan' => 'Anggota',
            'image' => 'placeholder.webp',
            'id_divisi' => 10,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Alvianda Chairofta',
            'jabatan' => 'Anggota',
            'image' => 'placeholder.webp',
            'id_divisi' => 10,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Nathan Angelo',
            'jabatan' => 'Anggota',
            'image' => 'placeholder.webp',
            'id_divisi' => 10,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Nathanael Axl',
            'jabatan' => 'Anggota',
            'image' => 'placeholder.webp',
            'id_divisi' => 10,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Jonathan Susanto',
            'jabatan' => 'Anggota',
            'image' => 'placeholder.webp',
            'id_divisi' => 10,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Reynaldo',
            'jabatan' => 'Anggota',
            'image' => 'TF - Reynaldo.webp',
            'id_divisi' => 10,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Rivo Juicer Wowor',
            'jabatan' => 'Ketua',
            'image' => 'CR - RIvo.webp',
            'id_divisi' => 8,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Frendhy Zhuang',
            'jabatan' => 'Wakil Ketua',
            'image' => 'placeholder.webp',
            'id_divisi' => 8,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Amanda Citra D',
            'jabatan' => 'Anggota',
            'image' => 'placeholder.webp',
            'id_divisi' => 8,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Ari Maulana',
            'jabatan' => 'Anggota',
            'image' => 'placeholder.webp',
            'id_divisi' => 8,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Jonathan Christian',
            'jabatan' => 'Anggota',
            'image' => 'CR - Jonathan.webp',
            'id_divisi' => 8,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Maulidya Isnaini',
            'jabatan' => 'Anggota',
            'image' => 'placeholder.webp',
            'id_divisi' => 8,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Marthin Riyaldo Solini Kese',
            'jabatan' => 'Ketua',
            'image' => 'placeholder.webp',
            'id_divisi' => 11,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Vika Gisella',
            'jabatan' => 'Wakil Ketua',
            'image' => 'placeholder.webp',
            'id_divisi' => 11,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Aaron Kho',
            'jabatan' => 'Anggota',
            'image' => 'TF - Aaron.webp',
            'id_divisi' => 11,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Michael Aditya',
            'jabatan' => 'Anggota',
            'image' => 'TF - Michael Aditya.webp',
            'id_divisi' => 11,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Russel Shivah',
            'jabatan' => 'Anggota',
            'image' => 'placeholder.webp',
            'id_divisi' => 11,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Wian Sanjaya',
            'jabatan' => 'Anggota',
            'image' => 'placeholder.webp',
            'id_divisi' => 11,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Vedian Bunka',
            'jabatan' => 'Anggota',
            'image' => 'placeholder.webp',
            'id_divisi' => 11,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Felix Rafael',
            'jabatan' => 'Anggota',
            'image' => 'placeholder.webp',
            'id_divisi' => 11,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Theresia Glory Emmanuella',
            'jabatan' => 'Anggota',
            'image' => 'placeholder.webp',
            'id_divisi' => 11,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Charel Rosabel',
            'jabatan' => 'Ketua',
            'image' => 'placeholder.webp',
            'id_divisi' => 9,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Devin Kurnia',
            'jabatan' => 'Wakil Ketua',
            'image' => 'placeholder.webp',
            'id_divisi' => 9,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Nataniel Tambayung',
            'jabatan' => 'Anggota',
            'image' => 'placeholder.webp',
            'id_divisi' => 9,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Sharon Tionardi',
            'jabatan' => 'Anggota',
            'image' => 'placeholder.webp',
            'id_divisi' => 9,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Hosea Dunatus Simanjuntak',
            'jabatan' => 'Anggota',
            'image' => 'placeholder.webp',
            'id_divisi' => 9,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Bryan',
            'jabatan' => 'Anggota',
            'image' => 'placeholder.webp',
            'id_divisi' => 9,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Ryann Chandiari',
            'jabatan' => 'Anggota',
            'image' => 'placeholder.webp',
            'id_divisi' => 9,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Steve Christian',
            'jabatan' => 'Anggota',
            'image' => 'placeholder.webp',
            'id_divisi' => 9,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Descellia Ng',
            'jabatan' => 'Anggota',
            'image' => 'placeholder.webp',
            'id_divisi' => 9,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Fellisca Veren',
            'jabatan' => 'Anggota',
            'image' => 'placeholder.webp',
            'id_divisi' => 9,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);

        Pengurus::create([
            'nama' => 'Austin Gillbert Liwanto',
            'jabatan' => 'Anggota',
            'image' => 'placeholder.webp',
            'id_divisi' => 9,
            'gen_id' => DB::table('gen_pengurus')->where('gen', 'GEN XIV')->first()->id
        ]);
    }
}
