<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <link rel="dns-prefetch" href="https://www.googletagmanager.com">
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-132426979-3"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-132426979-3');
    </script>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- SEO -->
    <meta name="author" content="Maurits Robbe">
    <meta name="description" content="">
    <meta name="keywords" content="cars, porsche">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600|Roboto:400&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json" crossorigin="use-credentials">
    <meta name="msapplication-TileColor" content="#f1f1f1">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#f1f1f1">

    <?php ((Request::segment(1) == NULL ) ? $isHome = true : $isHome = false); ?>
    <?php ((Request::segment(1) == 'gallery' ) ? $isGallery = true : $isGallery = false); ?>
</head>
<body class="{{ ( $isHome ) ? 'dark' : '' }} {{ ( $isGallery ) ? '' : 'noscroll' }}">
    <div id="smoothState">
        <div id="content" class="animate {{ ( $isHome ) ? 'home' : Request::segment(1) }} mp-fade-content">
            <header class="{{ ($isHome ) ? '' : 'show' }}">
                @include('inc.header')
            </header>
            @include('inc.nav')
            <main>
                @yield('content')
            </main>
            <footer>
                @include('inc.footer')
            </footer>
        </div>
    </div>
    <div class="page_transition">
        <div class="color c1"></div>
        <div class="color c2"><div class="logo white"><span>Porsche</span>xperience</div></div>
    </div>
    
    <!-- Scripts -->
    <script src="{{ asset('js/lib/TweenMax.min.js') }}"></script>
    <script src="{{ asset('js/lib/ScrollMagic.js') }}"></script>
    <script src="{{ asset('js/lib/animation.gsap.js') }}"></script>
    <script src="{{ asset('js/lib/debug.addIndicators.js') }}"></script>

    <script src="{{ asset('js/app.js') }}" defer></script>
</body>
</html>