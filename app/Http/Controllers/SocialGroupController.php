<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateSocialGroupReference;
use App\SocialGroup;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class SocialGroupController extends Controller
{
    function updateFacebookGroupReference(UpdateSocialGroupReference $request)
    {
        $fbGroup = SocialGroup::where('network_name', 'Facebook')->firstOrFail();
        $fbGroup->reference = $request->input('reference');
        $fbGroup->save();
    }

    function updateInstagramGroupReference(UpdateSocialGroupReference $request)
    {
        $instaGroup = SocialGroup::where('network_name', 'Instagram')->firstOrFail();
        $instaGroup->reference = $request->input('reference');
        $instaGroup->save();
    }

    function getFacebookGroupReference()
    {
        $fbGroup = SocialGroup::where('network_name', 'Facebook')->firstOrFail();
        $reference = $fbGroup->reference;

        return response()->json(compact('reference'));
    }

    function getInstagramGroupReference()
    {
        $instaGroup = SocialGroup::where('network_name', 'Instagram')->firstOrFail();
        $reference = $instaGroup->reference;

        return response()->json(compact('reference'));
    }

    function deleteFacebookGroupReference()
    {
        //We must not delete table row every time when we get delete request.
        //Because we are going to use one row all the time.

        $fbGroup = SocialGroup::where('network_name', 'Facebook')->firstOrFail();
        $fbGroup->reference = '';
        $fbGroup->save();
    }

    function deleteInstagramGroupReference()
    {
        //We must not delete table row every time when we get delete request.
        //Because we are going to use one row all the time.

        $instaGroup = SocialGroup::where('network_name', 'Instagram')->firstOrFail();
        $instaGroup->reference = '';
        $instaGroup->save();
    }

}
