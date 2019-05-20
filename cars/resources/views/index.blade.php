@extends('layouts.app')

@if ($categories->isEmpty())
    no category
@endif
<?php //echo ($categories) ?>

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
            <a href="#_{{ $value->name }}" data-car="{{ $value->id }}" class="list-group-item"><span>{{ $value->name }}</span><img src="/img/cars/overview/{{ $value->name }}.png"></a>
        </li>
        @endforeach
        <li>
            <a href="#mission-e" class="list-group-item"><span>Mission-E</span><img src="/img/cars/overview/mission-e.png"></a>
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
                        <hr>
                        <div class="content-inner">
                            <div>5,2s van 0 tot 100 km / h</div>
                            <div>300 pk</div>
                            <div>vanaf EUR 56.950</div>
                        </div>
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
        <h2>This is Porsche</h2>
        <h2>This is Porsche</h2>
        <h2>This is Porsche</h2>
        <h2>This is Porsche</h2>
        <h2>This is Porsche</h2>
        <h2>This is Porsche</h2>
        <h2>This is Porsche</h2>
    </div>
    <div id="sequence">
        <section class="panel p1 right"><img src="/img/cars/mission-e/01.jpg"></section>
        <section class="panel p2 left"><img src="/img/cars/mission-e/02.jpg"></section>
        <section class="panel p3 left"><img src="/img/cars/mission-e/03.png"></section>
        <section class="panel p4 left"><img src="/img/cars/mission-e/04.jpg"></section>
        <section class="panel p5 right"><img src="/img/cars/mission-e/05.jpg"></section>
        <section class="panel p6 right"><img src="/img/cars/mission-e/06.jpg"></section>
    </div>
</div>

@endsection