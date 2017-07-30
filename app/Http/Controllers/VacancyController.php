<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateVacancy;
use App\Http\Requests\UpdateVacancy;
use App\Vacancy;
use Illuminate\Http\Request;

class VacancyController extends Controller
{
    function list(){
        $vacancies = Vacancy::all();
        return response()->json(compact('vacancies'));
    }

    function create(CreateVacancy $request){
        $vacancy = new Vacancy();
        $vacancy->name        = $request->name;
        $vacancy->contacts    = $request->contacts;
        $vacancy->description = $request->description;
        $vacancy->save();
    }

    function update(UpdateVacancy $request, Vacancy $vacancy){
        $vacancy->name        = $request->name;
        $vacancy->contacts    = $request->contacts;
        $vacancy->description = $request->description;
        $vacancy->save();
    }

    function delete(Vacancy $vacancy){
        $vacancy->delete();
    }
}
