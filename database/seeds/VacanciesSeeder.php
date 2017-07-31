<?php

use App\Vacancy;
use Illuminate\Database\Seeder;

class VacanciesSeeder extends Seeder
{
    private $vacancies = [
        [
            'name' => 'Парикмахер',
            'openedAt'=>'Mon, 31 Jul 2017 10:07:16 GMT',
            'contacts' => '063 8888888',
            'description_ru' => 'Ru text.',
            'description_en' => 'En text.',
            'description_sl' => 'Sl text.',
        ],
        [
            'name' => 'Визажист',
            'openedAt'=>'Mon, 31 Jul 2017 10:07:16 GMT' ,
            'contacts' => 'hr@hr.com',
            'description_ru' => 'Ru text.',
            'description_en' => 'En text.',
            'description_sl' => 'Sl text.',
        ],
        [
            'name' => 'Стилист',
            'openedAt'=>'Mon, 31 Jul 2017 10:07:16 GMT',
            'contacts' => 'hr@hr.com',
            'description_ru' => 'Ru text.',
            'description_en' => 'En text.',
            'description_sl' => 'Sl text.',
        ],
        [
            'name' => 'Масте-маникюра',
            'openedAt'=>'Mon, 31 Jul 2017 10:07:16 GMT',
            'contacts' => 'hr@hr.com',
            'description_ru' => 'Ru text.',
            'description_en' => 'En text.',
            'description_sl' => 'Sl text.',
        ],
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
            $item->contacts = $vacancy['contacts'];
            $item->description_ru = $vacancy['description_ru'];
            $item->description_en = $vacancy['description_en'];
            $item->description_sl = $vacancy['description_sl'];
            $item->opened_at = $vacancy['openedAt'];
            $item->save();
        }
    }
}
