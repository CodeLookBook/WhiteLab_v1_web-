<?php

use App\Vacancy;
use Illuminate\Database\Seeder;

class VacanciesSeeder extends Seeder
{
    private $vacancies = [
        ['name' => 'Парикмахер', 'openedAt'=>'Mon, 31 Jul 2017 10:07:16 GMT',  'contacts' => '063 8888888', 'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!' ],
        ['name' => 'Визажист', 'openedAt'=>'Mon, 31 Jul 2017 10:07:16 GMT' , 'contacts' => 'hr@hr.com', 'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus! Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!'],
        ['name' => 'Стилист', 'openedAt'=>'Mon, 31 Jul 2017 10:07:16 GMT', 'contacts' => 'hr@hr.com', 'description' => 'Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam.'],
        ['name' => 'Масте-маникюра', 'openedAt'=>'Mon, 31 Jul 2017 10:07:16 GMT', 'contacts' => 'hr@hr.com', 'description' => 'Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!'],
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->vacancies as $vacancy) {

            $item = new Vacancy();
            $item->name = $vacancy['name'];
            $item->description = $vacancy['description'];
            $item->contacts = $vacancy['contacts'];
            $item->description = $vacancy['description'];
            $item->opened_at = $vacancy['openedAt'];
            $item->save();

        }
    }
}
