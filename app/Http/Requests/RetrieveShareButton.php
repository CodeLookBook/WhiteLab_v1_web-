<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RetrieveShareButton extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true; //TODO: только для super-admin и admin
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'location' => 'required|string',
        ];
    }
}
