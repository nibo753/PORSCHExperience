<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- SEO -->
    <meta name="author" content="Maurits Robbe">
    <meta name="description" content="">
    <meta name="keywords" content="cars, porsche">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="dns-prefetch" href="https://www.googletagmanager.com">
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600|Source+Sans+Pro:400" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <!-- Favicons -->
</head>
<?php ((Request::segment(1) == NULL ) ? $isHome = true : $isHome = false); ?>
<body data-spy="scroll" data-target="#sideNav" data-offset="200">
    <div id="smoothState" class="">
        <div id="content" class="{{ ( $isHome ) ? 'home no-scroll' : Request::segment(1) }}">
            <header class="{{ ($isHome ) ? '' : 'visible' }}">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <a href="{{ ( $isHome ) ? '#intro' : '/' }}" class="logo"><span>Porsche</span>xperience</a>
                        </div>
                        @if (Request::segment(1) == 'models' && !$cars->isEmpty() )
                        <div class="col model_name">
                            <span class="model_header">{{$cars[0]->category->name}}</span>
                        </div>
                        @endif
                        <div class="col menu">
                            MENU
                        </div>
                    </div>
                </div>
            </header>
            <main>
                @yield('content')
            </main>
        </div>
    </div>
    
    <!-- Scripts -->
    <script src="{{ asset('js/lib/TweenMax.min.js') }}"></script>
    <script src="{{ asset('js/lib/ScrollMagic.js') }}"></script>
    <script src="{{ asset('js/lib/animation.gsap.js') }}"></script>
    <script src="{{ asset('js/lib/debug.addIndicators.js') }}"></script>

    <script src="{{ asset('js/app.js') }}" defer></script>
</body>
</html>