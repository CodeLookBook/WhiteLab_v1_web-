<?php

namespace App\Http\Controllers;

use App\Greet;
use App\Http\Requests\CreateGreet;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class HomePageController extends Controller
{

    function getGreet(){

        //The 'Greets' table will always contain 1 record(row).
        //That's why we will always retrieve first row from table here.
        try {
            $greet = Greet::firstOrFail();
        } catch (ModelNotFoundException  $e){
            $greet = new Greet();
            $greet->russian = '';
            $greet->english = '';
            $greet->slovak  = '';
            $greet->save();
        }

        return response()->json(compact('greet'));
    }

    function updateGreet(CreateGreet $request){

        // The 'Greets' table will always contain 1 record(row).
        // That's why we will always retrieve first row from table here.
        // to check if it's already created.
        try {
            $oldGreet = Greet::firstOrFail();
        } catch (ModelNotFoundException  $e){
            $oldGreet = null;
        }

        // Retrieve data from request.
        $russian = $request->input('russian');
        $english = $request->input('english');
        $slovak  = $request->input('slovak' );

        // If greet doesn't exists
        if($oldGreet == null){

            // Create new table field.
            {
                $newGreet = new Greet();
                $newGreet->russian = $russian;
                $newGreet->english = $english;
                $newGreet->slovak  = $slovak;
                $newGreet->save();
            }

        // If greet exists
        } else {

            //Update existing field.
            $oldGreet->russian = $russian;
            $oldGreet->english = $english;
            $oldGreet->slovak  = $slovak;
            $oldGreet->save();
        }
    }
    function deleteGreet(){

        // The 'Greets' table will always contain 1 record(row).
        // That's why we will always retrieve first row from table here.
        // to check if it's already created.
        try {
            $greet = Greet::firstOrFail();
        } catch (ModelNotFoundException  $e){
            $greet = null;
        }

        // If GREET is NOT NULL
        if($greet != null){
            //Just reset table row. Don't delete.
            $greet->russian = "";
            $greet->english = "";
            $greet->slovak  = "";
            $greet->save();
        }
    }

}
