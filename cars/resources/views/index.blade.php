@extends('layouts.app')

@section('content')
<section class="intro" id="intro" data-car="0">
    <div class="container">
        <div class="row txt">
            <div class="col">
                <div class="logo"><span>Porsche</span>xperience</div>
                <div class="slogan">Designed to experience</div>
            </div>
        </div>
        <div class="start_btn">
            <a id="start" data-car="1">
                <input id="discover" class="disabled btn btn-primary CTA" type="submit" value="Loading ..." />
            </a>
        </div>
        <audio id="audio_motor">
           <source src="sounds/start.ogg" type="audio/ogg">
           <source src="sounds/start.mp3" type="audio/mpeg">
        </audio>
    </div>
    <div class="parallax"></div>
</section>

<nav id="sideNav">
    <ul>
        @foreach ($categories as $category => $value)
        <li>
            <a href="#_{{ $value->name }}" data-car="{{ $value->id }}" class="list-group-item"><span>{{ $value->name }}</span><img src="/img/overview/{{ $value->name }}.png"></a>
        </li>
        @endforeach
        <li>
            <a href="#mission-e" class="list-group-item"><span>Mission-E</span><img src="/img/overview/mission-e.png"></a>
        </li>
    </ul>
</nav>

<div class="overview">
    @foreach ($categories as $category => $value)
    <section class="car" id="_{{ $value->name }}" data-car="{{ $value->id }}">
        <div class="container content">
            <div class="row">
                <div class="col">
                    <div class="desc">
                        <h1 class="title">{{ $value->name }}</h1>
                        @if ($value->price != 0)
                        <hr>
                        <div class="content-inner">
                            <div class="flex">
                                <div class="price">
                                    <span class="value" data="{{ $value->price }}">0</span>
                                    <span class="unit">EUR</span>
                                </div>
                                @if ($value->pk != 0)
                                <div class="pk">
                                    <span class="value" data="{{ $value->pk }}">0</span>
                                    <span class="unit">PK</span>
                                </div>
                                @endif
                                @if ($value->topspeed != 0)
                                <div class="speed">
                                    <span class="value" data="{{ $value->topspeed }}">0</span>
                                    <span class="unit">km/h</span>
                                </div>
                                @endif
                                @if ($value->acceleration_sport != 0)
                                <div class="acc">
                                    <span class="value" data="{{ $value->acceleration_sport }}">0</span>
                                    <span class="unit">seconds</span>
                                </div>
                                @endif
                            </div>
                            <a href="/models/{{ $value->name }}" class="models">Show all {{ $value->name }} models</a>
                        </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
        <div class="parallax"></div>
    </section>
    @endforeach
</div>

<div id="mission-e">
    <div class="title">
        <h1 class="fade">The future is now</h1>
        <h1 class="fade">This is Mission-E</h1>
    </div>
    <div id="sequence">
        <section class="panel p1 right"><img src="/img/mission-e/01.jpg"></section>
        <section class="panel p2 left"><img src="/img/mission-e/02.jpg"></section>
        <section class="panel p3 left"><img src="/img/mission-e/03.png"></section>
        <section class="panel p4 left"><img src="/img/mission-e/04.jpg"></section>
        <section class="panel p5 right"><img src="/img/mission-e/05.jpg"></section>
        <section class="panel p6 right"><img src="/img/mission-e/06.jpg"></section>
    </div>
</div>

@endsection