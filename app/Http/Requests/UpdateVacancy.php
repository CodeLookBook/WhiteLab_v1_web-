<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateVacancy extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nameRu'        => "required|string|max:255",
            'nameEn'        => "required|string|max:255",
            'nameSl'        => "required|string|max:255",
            'contacts'      => "required|string|max:255",
            'descriptionRu' => "required|string|max:65535",
            'descriptionEn' => "required|string|max:65535",
            'descriptionSl' => "required|string|max:65535",
        ];
    }
}
