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
        $vacancy->name        = $request->input('name');
        $vacancy->contacts    = $request->input('contacts');
        $vacancy->description = $request->input('description');
        $vacancy->opened_at   = $request->input('openedAt');
        $vacancy->save();

        //Send ID to client
        $id = $vacancy->id;
        return response()->json(compact('id'));
    }

    function update(UpdateVacancy $request, Vacancy $vacancy){
        $vacancy->name        = $request->input('name');
        $vacancy->contacts    = $request->input('contacts');
        $vacancy->description = $request->input('description');
        $vacancy->save();
    }

    function delete(Vacancy $vacancy){
        $vacancy->delete();
    }
}
