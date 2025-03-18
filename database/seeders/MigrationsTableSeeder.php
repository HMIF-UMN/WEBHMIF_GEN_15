<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class MigrationsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('migrations')->delete();
        
        \DB::table('migrations')->insert(array (
            0 => 
            array (
                'id' => 1,
                'migration' => '2014_10_12_000000_create_users_table',
                'batch' => 1,
            ),
            1 => 
            array (
                'id' => 2,
                'migration' => '2014_10_12_100000_create_password_resets_table',
                'batch' => 1,
            ),
            2 => 
            array (
                'id' => 3,
                'migration' => '2019_08_19_000000_create_failed_jobs_table',
                'batch' => 1,
            ),
            3 => 
            array (
                'id' => 4,
                'migration' => '2019_12_14_000001_create_personal_access_tokens_table',
                'batch' => 1,
            ),
            4 => 
            array (
                'id' => 5,
                'migration' => '2022_03_08_135900_create_gen_pengurus_table',
                'batch' => 1,
            ),
            5 => 
            array (
                'id' => 6,
                'migration' => '2023_02_26_170011_create_divisi',
                'batch' => 1,
            ),
            6 => 
            array (
                'id' => 7,
                'migration' => '2023_02_26_170500_create_pengurus',
                'batch' => 1,
            ),
            7 => 
            array (
                'id' => 8,
                'migration' => '2023_02_26_171744_create_proker',
                'batch' => 1,
            ),
            8 => 
            array (
                'id' => 9,
                'migration' => '2023_05_25_170944_create_code_xpo_type_racers_table',
                'batch' => 1,
            ),
            9 => 
            array (
                'id' => 10,
                'migration' => '2023_07_27_123417_create_ctf_table',
                'batch' => 1,
            ),
            10 => 
            array (
                'id' => 11,
                'migration' => '2023_08_02_161601_create_mahasiswas_table',
                'batch' => 1,
            ),
            11 => 
            array (
                'id' => 12,
                'migration' => '2023_08_02_161647_create_c_s_s_table',
                'batch' => 1,
            ),
            12 => 
            array (
                'id' => 13,
                'migration' => '2023_08_02_161648_create_c_s_s_groups_table',
                'batch' => 1,
            ),
            13 => 
            array (
                'id' => 14,
                'migration' => '2023_08_02_162053_create_mahasiswa__c_s_s_table',
                'batch' => 1,
            ),
            14 => 
            array (
                'id' => 15,
                'migration' => '2023_08_18_114151_create_login_logs_table',
                'batch' => 1,
            ),
            15 => 
            array (
                'id' => 16,
                'migration' => '2024_03_26_113049_create_sessions_table',
                'batch' => 1,
            ),
            16 => 
            array (
                'id' => 17,
                'migration' => '2024_05_17_150338_create_code_xpo_racing_sim_table',
                'batch' => 1,
            ),
            17 => 
            array (
                'id' => 18,
                'migration' => '2024_06_11_132449_create_homes_table',
                'batch' => 1,
            ),
            18 => 
            array (
                'id' => 19,
                'migration' => '2024_06_11_153301_create_contacts_table',
                'batch' => 1,
            ),
            19 => 
            array (
                'id' => 20,
                'migration' => '2024_06_11_163822_create_divisi_anggotas_table',
                'batch' => 2,
            ),
            20 => 
            array (
                'id' => 21,
                'migration' => '2024_06_11_172738_create_home_carousels_table',
                'batch' => 3,
            ),
            21 => 
            array (
                'id' => 22,
                'migration' => '2024_06_12_045826_create_about_us_table',
                'batch' => 4,
            ),
            22 => 
            array (
                'id' => 23,
                'migration' => '2024_06_12_053203_create_visions_table',
                'batch' => 5,
            ),
            23 => 
            array (
                'id' => 24,
                'migration' => '2024_06_12_053853_create_missions_table',
                'batch' => 6,
            ),
            24 => 
            array (
                'id' => 25,
                'migration' => '2024_06_12_054623_create_missions_table',
                'batch' => 7,
            ),
            25 => 
            array (
                'id' => 26,
                'migration' => '2024_06_12_060815_create_navbars_table',
                'batch' => 8,
            ),
            26 => 
            array (
                'id' => 27,
                'migration' => '2024_06_12_090348_create_proker_texts_table',
                'batch' => 9,
            ),
        ));
        
        
    }
}