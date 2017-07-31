<?php

use App\OrderWidget;
use Illuminate\Database\Seeder;

class OrderWidgetsTable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $russianOrderWidget = new OrderWidget();
        $russianOrderWidget->name = 'Yclients';
        $russianOrderWidget->language = 'Russian';
        $russianOrderWidget->src = '//w53795.yclients.com/widgetJS';
        $russianOrderWidget->save();

        $englishOrderWidget = new OrderWidget();
        $englishOrderWidget->name = 'Yclients';
        $englishOrderWidget->language = 'English';
        $englishOrderWidget->src = '//w53795.yclients.com/widgetJS';
        $englishOrderWidget->save();

        $slovakOrderWidget = new OrderWidget();
        $slovakOrderWidget->name = 'Yclients';
        $slovakOrderWidget->language = 'Slovak';
        $slovakOrderWidget->src = '//w53795.yclients.com/widgetJS';
        $slovakOrderWidget->save();
    }
}
