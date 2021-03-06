<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call(RolesTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(GreetsTableSeeder::class);
        $this->call(SocialGroupsSeeder::class);
        $this->call(ShareButtonsSeeder::class);
        $this->call(OrderWidgetsTable::class);
        $this->call(VacanciesSeeder::class);
    }
}
