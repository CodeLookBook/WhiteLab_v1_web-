<?php

use App\Role;
use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    private $users = null;

    function __construct()
    {
        $this->users = [
            [
                'name'=>'Евгений',
                'patronymic'=>'Владимирович',
                'surname'=>'Мирошниченко',
                'login'=>'CodeLookBook',
                'password'=>'123456789',
                'role'=>'super-admin',
            ],
            [
                'name'=>'Андрей',
                'patronymic'=>'Васильевич',
                'surname'=>'Мирошниченко',
                'login'=>'super-admin-1',
                'password'=>'123456789',
                'role'=>'super-admin',
            ],
            [
                'name'=>'',
                'patronymic'=>'',
                'surname'=>'',
                'login'=>'super-admin-2',
                'password'=>'123456789',
                'role'=>'super-admin',
            ],
            [
                'name' => 'Test',
                'patronymic' => 'Test',
                'surname' => 'Test',
                'login' => 'admin-1',
                'password' => '111111',
                'role' => 'admin',
            ]
        ];
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->users as $user)
        {
            $admin = new User();
            $admin->name = $user['name'];
            $admin->patronymic = $user['patronymic'];
            $admin->surname = $user['surname'];
            $admin->login = $user['login'];
            $admin->password = bcrypt($user['password']);
            $role = Role::where('name', $user['role'])->firstOrFail();
            $admin->role()->associate($role);
            $admin->save();
        }
    }
}
