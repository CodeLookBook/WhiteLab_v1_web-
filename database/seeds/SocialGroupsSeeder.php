<?php

use App\SocialGroup;
use Illuminate\Database\Seeder;

class SocialGroupsSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $faceBook = new SocialGroup();
        $faceBook->network_name = 'Facebook';
        $faceBook->reference    = 'https://www.facebook.com';
        $faceBook->save();

        $instagram = new SocialGroup();
        $instagram->network_name = 'Instagram';
        $instagram->reference     = 'https://www.instagram.com';
        $instagram->save();

        $vk = new SocialGroup();
        $vk->network_name = 'Vkontakte';
        $vk->reference     = 'https://www.vk.com';
        $vk->save();

        $googlePlus = new SocialGroup();
        $googlePlus->network_name = 'GooglePlus';
        $googlePlus->reference     = 'https://plus.google.com';
        $googlePlus->save();

        $twitter = new SocialGroup();
        $twitter->network_name = 'Twitter';
        $twitter->reference     = 'https://www.twitter.com';
        $twitter->save();

        $youtube = new SocialGroup();
        $youtube->network_name = 'Youtube';
        $youtube->reference     = 'https://www.youtube.com';
        $youtube->save();
    }
}
