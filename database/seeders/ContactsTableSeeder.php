<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ContactsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('contacts')->delete();
        
        \DB::table('contacts')->insert(array (
            0 => 
            array (
                'id' => 1,
                'email' => 'hmif@umn.ac.id',
                'email_link' => 'https://mail.google.com/mail/u/0/?fs=1&to=hmif@umn.ac.id&tf=cm',
            'line' => '@682fnddg (Line Official HMIF UMN)',
                'line_link' => 'https://line.me/ti/p/~@682fnddg',
                'instagram' => '@hmif.umn',
                'instagram_link' => 'https://instagram.com/hmif.umn',
                'discord' => 'Discord Informatika UMN',
                'discord_link' => 'https://discord.gg/ywjuhAmXut',
                'created_at' => '2024-06-11 16:06:37',
                'updated_at' => '2024-06-11 16:06:37',
            ),
        ));
        
        
    }
}