<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class PriceController extends Controller
{
    public function upload(Request $request){

        $file = $request->file('price');

        if($file){

            $extension = $file->extension();

            if($extension == 'pdf'){
                Storage::disk('price')->put('price.'.$extension, File::get($file));
            } else {
                return response()->json(['wrong_file_extension'], 415);
            }
        } else {
            response('', 422);
        }
    }

    public function download(){
        if(Storage::disk('price')->exists('price.pdf')){
            return \response()->make(Storage::disk('price')->get('price.pdf'), 200, [
                'Content-Type' => 'application/pdf',
                'Content-Disposition' => 'inline; filename="price.pdf"'
            ]);
        } else {
            response('', 500);
        }
    }
}
