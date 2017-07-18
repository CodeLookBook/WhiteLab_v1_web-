<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserController extends Controller
{
    public function login(Request $request){

        // grab credentials from the request
        $credentials = $request->only('login', 'password');

        try {

            // attempt to verify the credentials and create a token for the user
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {

            // something went wrong whilst attempting to encode the token
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        //Get expiration time. The expirationTime stored as a Unix timestamp.
        $payload = JWTAuth::getPayload($token);
        $expirationTime = $payload['exp'];
        //Conver time to JavaScript date.
        $expirationTime *=1000;

        //Get user ROLE
        $user = JWTAuth::toUser($token);
        $userRole = $user->role->name;

        // all good so return the token
        return response()->json(compact('token', 'expirationTime', 'userRole'));
    }
}
