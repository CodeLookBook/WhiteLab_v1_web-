<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeleteShareButton;
use App\Http\Requests\RetrieveShareButton;
use App\Http\Requests\UpdateShareButton;
use App\ShareButton;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class ShareButtonController extends Controller
{
    function retrieve(RetrieveShareButton $request){

        // FIND share button
        $location = $request->input('location');
        $settings = ShareButton::where('location', $location)->firstOrFail();

        // SEND to client
        return response()->json(compact('settings'));
    }

    function update(UpdateShareButton $request){

        // FIND share button

        $location = $request->input('location');

        $shareButton = ShareButton::where('location', $location)->firstOrFail();

        // RETRIEVE data from request

        $url = $request->has('url') ? $request->input('url') : '';
        $title = $request->has('title') ? $request->input('title') : '';
        $description = $request->has('description') ? $request->input('description') : '';
        $quote = $request->has('quote') ? $request->input('quote') : '';
        $hashtags = $request->has('hashtags') ? $request->input('hashtags') : '';
        $twitter = $request->has('twitter') ? $request->input('twitter') : '';
        $media = $request->has('media') ? $request->input('media') : '';

        // UPDATE table row data

        $shareButton->url = $url;
        $shareButton->title = $title;
        $shareButton->description = $description;
        $shareButton->quote = $quote;
        $shareButton->hashtags = $hashtags;
        $shareButton->twitter_user = $twitter;
        $shareButton->media = $media;

        // SAVE data in the table
        $shareButton->save();
    }

    function delete(Request $request, $location){

        // FIND share button
        $shareButton = ShareButton::where('location', $location)->firstOrFail();

        // UPDATE table data (imitates deletion)

        $shareButton->url = '';
        $shareButton->title = '';
        $shareButton->description = '';
        $shareButton->quote = '';
        $shareButton->hashtags = '';
        $shareButton->twitter_user = '';
        $shareButton->media = '';

        // SAVE changes in the table row
        $shareButton->save();
    }

}
