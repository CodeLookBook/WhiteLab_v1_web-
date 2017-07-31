<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class AddressController extends Controller
{
    public function upload(Request $request){

        $file = $request->file('address_map');

        if($file){

            $extension = $file->extension();
            $clientOriginalExtension = $file->getClientOriginalExtension();
            $isJPEG = mb_strtolower($extension) == 'jpeg';
            $isJPG  = mb_strtolower($clientOriginalExtension) == 'jpg';

            if( $isJPEG && $isJPG){
                Storage::disk('address')->put('address_map.'.mb_strtolower($clientOriginalExtension), File::get($file));
            } else {
                return response()->json(['wrong_file_extension'], 415);
            }
        } else {
            response('wrong_file_type', 422);
        }
    }
}
