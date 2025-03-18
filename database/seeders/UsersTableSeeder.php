<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('users')->delete();
        
        \DB::table('users')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'hmif',
                'email' => 'hmif@umn.ac.id',
                'is_admin' => 1,
                'email_verified_at' => '2024-06-13 02:51:30',
                'password' => '$2y$10$3TO9RKlTDTqSN/oIfRAwauEYM95OEna3noeHW.IkzaWo/.3y.Ev6O',
                'salt' => '',
                'remember_token' => 'ZnFQI4r8YCE5xldgK1chjtT20xlF4FPK3QiZ1vV9ihLBi6XX0EEipBIjewVc',
                'created_at' => '2024-06-11 15:45:41',
                'updated_at' => '2024-06-11 15:45:41',
            ),
        ));
        
        
    }
}