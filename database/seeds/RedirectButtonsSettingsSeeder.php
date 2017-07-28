<?php

use App\RedirectButtonSettings;
use Illuminate\Database\Seeder;

class RedirectButtonsSettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $orderButtonSettings = new RedirectButtonSettings();
        $orderButtonSettings->name = "order";
        $orderButtonSettings->redirects_to = "http://www.facebook.com";
        $orderButtonSettings->save();
    }
}
