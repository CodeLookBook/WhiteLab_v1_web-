<?php

use App\Vacancy;
use Illuminate\Database\Seeder;

class VacanciesSeeder extends Seeder
{
    private $vacancies = [
        [
            'name_ru' => 'Парикмахер-1',
            'name_en' => 'Hairdresser-1',
            'name_sl' => 'Kaderník-1',
            'openedAt'=>'Mon, 31 Jul 2017 10:07:16 GMT',
            'contacts' => '063 8888888',
            'description_ru' => 'Ru text - 1.',
            'description_en' => 'En text - 1.',
            'description_sl' => 'Sl text - 1.',
        ],
        [
            'name_ru' => 'Парикмахер-2',
            'name_en' => 'Hairdresser-2',
            'name_sl' => 'Kaderník-2',
            'openedAt'=>'Mon, 31 Jul 2017 10:07:16 GMT' ,
            'contacts' => 'hr@hr.com',
            'description_ru' => 'Ru text - 2.',
            'description_en' => 'En text - 2.',
            'description_sl' => 'Sl text - 2.',
        ],
        [
            'name_ru' => 'Парикмахер-3',
            'name_en' => 'Hairdresser-3',
            'name_sl' => 'Kaderník-3',
            'openedAt'=>'Mon, 31 Jul 2017 10:07:16 GMT',
            'contacts' => 'hr@hr.com',
            'description_ru' => 'Ru text - 3.',
            'description_en' => 'En text - 3.',
            'description_sl' => 'Sl text - 3.',
        ],
        [
            'name_ru' => 'Парикмахер-4',
            'name_en' => 'Hairdresser-4',
            'name_sl' => 'Kaderník-4',
            'openedAt'=>'Mon, 31 Jul 2017 10:07:16 GMT',
            'contacts' => 'hr@hr.com',
            'description_ru' => 'Ru text - 4.',
            'description_en' => 'En text - 4.',
            'description_sl' => 'Sl text - 4.',
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
            $item->name_ru = $vacancy['name_ru'];
            $item->name_en = $vacancy['name_en'];
            $item->name_sl = $vacancy['name_sl'];
            $item->contacts = $vacancy['contacts'];
            $item->description_ru = $vacancy['description_ru'];
            $item->description_en = $vacancy['description_en'];
            $item->description_sl = $vacancy['description_sl'];
            $item->opened_at = $vacancy['openedAt'];
            $item->save();
        }
    }
}
