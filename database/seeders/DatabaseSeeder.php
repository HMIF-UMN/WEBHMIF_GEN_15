<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)->create();

        // $this->call([
        //     GenPengurusSeeder::class,
        //     DivisiSeeder::class,
        //     UserSeeder::class,
        //     ProkerSeeder::class,
        //     PengurusSeeder::class,
        //     CSSseeder::Class,
        //     MahasiswaSeeder::Class,
        //     CSSGroupSeeder::class,
        //     MahasiswaCSSseeder::class,
        // ]);
        $this->call(AboutUsTableSeeder::class);
        $this->call(CodeXpoRacingSimTableSeeder::class);
        $this->call(CodeXpoTypeRacersTableSeeder::class);
        $this->call(ContactsTableSeeder::class);
        $this->call(CtfTableSeeder::class);
        $this->call(CSSTableSeeder::class);
        $this->call(CSSGroupsTableSeeder::class);
        $this->call(DivisiTableSeeder::class);
        $this->call(DivisiAnggotasTableSeeder::class);
        $this->call(FailedJobsTableSeeder::class);
        $this->call(GenPengurusTableSeeder::class);
        $this->call(GridPhotosTableSeeder::class);
        $this->call(HomesTableSeeder::class);
        $this->call(HomeCarouselsTableSeeder::class);
        $this->call(LinksTableSeeder::class);
        $this->call(LoginLogsTableSeeder::class);
        $this->call(MahasiswasTableSeeder::class);
        $this->call(MahasiswaCSSTableSeeder::class);
        $this->call(MigrationsTableSeeder::class);
        $this->call(MissionsTableSeeder::class);
        $this->call(NavbarsTableSeeder::class);
        $this->call(PasswordResetsTableSeeder::class);
        $this->call(PengurusTableSeeder::class);
        $this->call(PersonalAccessTokensTableSeeder::class);
        $this->call(ProkerTableSeeder::class);
        $this->call(ProkerTextsTableSeeder::class);
        $this->call(SessionsTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(VisionsTableSeeder::class);
    }
}
