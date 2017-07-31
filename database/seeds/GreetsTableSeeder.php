<?php

use App\Greet;
use Illuminate\Database\Seeder;

class GreetsTableSeeder extends Seeder
{
    private $russianGreetText;
    private $englishGreetText;
    private $slovakGreetText;

    function __construct()
    {
        $this->russianGreetText = "Городской формат центра красоты, где ".
        "все к чему привыкла самая взыскательная аудитория делается быстро ".
        "и с искренней доброжелательностью гостеприимного дома";

        $this->englishGreetText = "The urban format of the beauty center, ".
        "where everything is used to the most demanding audience is done ".
        "quickly and with a sincere friendliness of the hospitable home.";

        $this->slovakGreetText = "Urban krása formát centrum, kde je ".
        "všetko, čo bolo použité tie najnáročnejšie divákov vyrobený rýchlo ".
        "a úprimným goodwillu pohostinné domácnosti.";

    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $greets = new Greet();
        $greets->russian = $this->russianGreetText;
        $greets->english = $this->englishGreetText;
        $greets->slovak  = $this->slovakGreetText;
        $greets->save();
    }
}
