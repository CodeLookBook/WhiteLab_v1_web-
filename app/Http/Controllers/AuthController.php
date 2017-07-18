<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function isTokenValid(){

        $user    = null;
        $isValid = false;

        try{
            $user = JWTAuth::parseToken()->authenticate();
        } catch (JWTException $e) { }

        if(!!$user){
            $isValid = true;
        }

        return response()->json(compact($isValid));
    }
}
