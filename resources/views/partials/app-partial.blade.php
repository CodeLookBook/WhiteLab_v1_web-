@extends('layouts.app')

@section('MetaTags')

    <!--META tags-->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Facebook Open Graph tags to customize link previews.
    Learn more: https://developers.facebook.com/docs/sharing/webmasters -->
    <meta property="og:url"           content="" />
    <meta property="og:type"          content="" />
    <meta property="og:title"         content="" />
    <meta property="og:description"   content="" />
    <meta property="og:image"         content="" />

@endsection

@section('Title')

    <!-- Page Titile -->
    <title>White Lab</title>

@endsection

@section('Scripts')

    <!-- Laravel csrfToken -->
    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>
    </script>

@endsection

@section('VueJs')
    <!-- Vue Js Files -->
    <script src="{{ mix('js/app.js') }}" defer></script>
@endsection

@section('Styles')


    <!-- Normalize styles-->
    <link href="{{ mix('css/normalize.css')}}" rel="stylesheet" type="text/css">

    <!--App Styles -->
    <link href="{{ mix('css/app.css')}}" rel="stylesheet" type="text/css">

    <!-- Google map-->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400" rel="stylesheet">
    <link href="https://cdn.mapkit.io/v1/infobox.css" rel="stylesheet" >
    <style>
        #mapkit-1595 {
            height: 100%;
            width: 100%;
        }
    </style>

    <!-- Custom styles -->
    <style>
        *{
            box-sizing: border-box;
        }
        html, body {
            overflow: hidden;
            width:      100%;
            height:     100%;
        }
    </style>

@endsection