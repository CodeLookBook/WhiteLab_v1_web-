<?php

use App\ShareButton;
use Illuminate\Database\Seeder;

class ShareButtonsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $fbShareButton = new ShareButton();
        $fbShareButton->location    = 'Home-page';
        $fbShareButton->url         = 'https://ru.vuejs.org/';
        $fbShareButton->title       = 'WhiteLab - городской формат центра красоты';
        $fbShareButton->description = "Здесь вы найдете все к чему привыкла самая взыскательная аудитория, ".
                                      "здесь все делается быстро и с искренней доброжелательностью ".
                                      "гостеприимного дома.";
        $fbShareButton->quote       = "WhiteLab - центр красоты.";
        $fbShareButton->hashtags    = "WhiteLab, ЦентрКрасоты";
        $fbShareButton->save();
    }
}
