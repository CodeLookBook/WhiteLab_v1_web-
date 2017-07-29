<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateVacancy;
use App\Http\Requests\UpdateVacancy;
use App\Vacansy;
use Illuminate\Http\Request;

class VacancyController extends Controller
{
    function list(){
        $vacancies = Vacansy::all();
        return response()->json(compact('vacancies'));
    }

    function create(CreateVacancy $request){

        $vacancy = new Vacansy();
        $vacancy->name = $
    }

    function update(UpdateVacancy $request, Vacansy $vacancy){

    }

    function delete(Vacansy $vacancy){
        $vacancy->delete();
    }
}
