@extends('layouts.admin')

@section('MetaTags')

    <!--META tags-->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
@endsection

@section('Title')

    <!-- Page Titile -->
    <title>White Lab - Admin Login</title>

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
    <script src="{{ mix('js/admin.js') }}" defer></script>
@endsection

@section('Styles')


    <!-- Normalize styles-->
    <link href="{{ mix('css/normalize.css')}}" rel="stylesheet" type="text/css">

    <!--App Styles -->
    <link href="{{ mix('css/admin.css')}}" rel="stylesheet" type="text/css">

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