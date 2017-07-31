<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeleteWidget;
use App\Http\Requests\RetrieveWidget;
use App\Http\Requests\WidgetUpdate;
use App\OrderWidget;
use Illuminate\Http\Request;

class OrderWidgetController extends Controller
{
    function retrieve(Request $request) {

        $name       = $request->input('name');
        $language   = $request->input('language');
        $widget     = OrderWidget::where('name', $name)->where('language', $language)->firstOrFail();

        return response()->json(compact('widget'));
    }

    function update (WidgetUpdate $request) {

        $name        = $request->input('name');
        $language    = $request->input('language');

        $widget      = OrderWidget::where('name', $name)->where('language', $language)->firstOrFail();
        $widget->src = $request->input('src');
        $widget->save();
    }

    function  delete ($name, $language) {

        $widget      = OrderWidget::where('name', $name)->where('language', $language)->firstOrFail();
        $widget->src = '';
        $widget->save();
    }
}
