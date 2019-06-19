@extends('layouts.app')

@section('content')
<section class="intro" id="intro" data-car="0">
    <div class="container">
        <div class="row txt">
            <div class="col">
                <div class="audio flex">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
                <div>
                    <div class="logo white"><span>Porsche</span>xperience</div>
                    <div class="slogan white">Designed to experience</div>
                </div>
            </div>
        </div>
        <div class="start_btn">
            <a id="start" data-car="1">
                <input id="discover" class="disabled btn btn-primary CTA" type="submit" value="Loading ..." />
            </a>
        </div>
    </div>
    <div class="parallax dark"></div>
    <div class="parallax light"></div>
</section>

<nav id="sideNav">
    <ul>
        @foreach ($categories as $category => $value)
        <li>
            <a href="#_{{ strtolower($value->name) }}" data-car="{{ $value->id }}" class="list-group-item"><span>{{ $value->name }}</span><img src="/img/overview/{{ strtolower($value->name) }}.png"></a>
        </li>
        @endforeach
        <li>
            <a href="#mission-e" class="list-group-item"><span>Mission-E</span><img src="/img/overview/mission-e.png"></a>
        </li>
    </ul>
</nav>

<div class="overview">
    @foreach ($categories as $category => $value)
    <section class="car" id="_{{ strtolower($value->name) }}" data-car="{{ $value->id }}">
        <div class="container content">
            <div class="row">
                <div class="col">
                    <div class="desc">
                        <h1 class="title">{{ $value->name }}</h1>
                        <hr>
                        <div class="content-inner">
                            @if ($value->intro != '')
                            <p class="txt"><b>{{ $value->name }}:</b> {{ $value->intro }}</p>
                            @endif
                            @if ($value->price != 0)
                            <div class="flex svg_container">
                                <div class="price svg">
                                    <span class="svg_content">
                                        <div class="value" data="{{ $value->price }}">0</div>
                                        <div class="unit">EURO</div>
                                    </span>
                                    @include('inc.svg/speedometer')
                                </div>
                                @if ($value->topspeed != 0)
                                <div class="speed svg">
                                    <span class="svg_content">
                                        <div class="value" data="{{ $value->topspeed }}">0</div>
                                        <div class="unit">km/h</div>
                                    </span>
                                    @include('inc.svg/speedometer')
                                </div>
                                @endif
                                @if ($value->acceleration_sport != 0)
                                <div class="acc svg">
                                    <span class="svg_content">
                                        <div class="value" data="{{ $value->acceleration_sport }}">0</div>
                                        <div class="unit">0-100 km/h</div>
                                    </span>
                                    @include('inc.svg/speedometer')
                                </div>
                                @endif
                            </div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="parallax">
            <div class="container-fluid">
                <a href="/models/{{ strtolower($value->name) }}" class="hover_effect h_brand model_link" data-hover="Discover more &raquo;">Discover more</a>
            </div>
        </div>
    </section>
    @endforeach
</div>

<div id="mission-e">
    <div class="title">
        <h1 class="fade">The future is now</h1>
        <h1 class="fade">Welcome to Mission-E</h1>
        <div class="mouse_parent">
            <div class="mouse"></div>
            <span>Scroll<br>Down</span>
        </div>
    </div>
    <div id="sequence">
        <section class="panel p1 right"><img src="/img/mission-e/01.jpg" alt="Mission E 01"></section>
        <section class="panel p2 left"><img src="/img/mission-e/02.jpg" alt="Mission E 02"></section>
        <section class="panel p3 left"><img src="/img/mission-e/03.png" alt="Mission E 03"></section>
        <section class="panel p4 left"><img src="/img/mission-e/04.jpg" alt="Mission E 04"></section>
        <section class="panel p5 right"><img src="/img/mission-e/05.jpg" alt="Mission E 05"></section>
        <section class="panel p6 right"><img src="/img/mission-e/06.jpg" alt="Mission E 06"></section>
        <div id="mission_reveal">
            <h2>The Porsche Mission E</h2>
        </div>
    </div>
    <div class="info">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h3>Concept Study</h3>
                    <hr>
                    <p>The Mission-E concept study is still an idea. But she indicates what we think electric driving can look like. 4 separate seats, 4 doors, 2 luggage compartments. Electric drive with typical Porsche E-Performance. Combined into a harmonious total concept. The current concept study Mission E is already preparing the way to the future. With its design and technology, it offers answers to the demand for the sports car of the future.</p>
                    <a href="https://www.porsche.com/microsite/mission-e/belgium.aspx#/design" target="_blank" class="hover_effect h_dark" data-hover="Learn more &raquo;">Learn more</a>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection