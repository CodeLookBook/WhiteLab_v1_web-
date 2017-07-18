<?php

use App\Role;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    private $roles = null;

    function __construct()
    {
        $this->roles = [
            "super-admin",
            "admin",
        ];
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->roles as $name){

            $role = new Role();
            $role->name = $name;
            $role->save();
        }
    }
}
