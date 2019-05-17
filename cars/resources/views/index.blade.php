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

<div class="overview">
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

    @foreach ($categories as $category => $value)
    <section class="car category" id="_{{ $value->name }}" data-car="{{ $value->id }}">
        <div class="container content">
            <div class="row">
                <div class="col">
                    <div class="desc">
                        <h1 class="title">{{ $value->name }}</h1>
                        <hr>
                        <div class="content-inner">
                            The history of Porsche goes back to 1875 - the birth year of Ferdinand Porsche. It is he who laid the foundations for a unique company with strong ideals.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="parallax"></div>
    </section>
    @endforeach

    <section class="car" id="mission-e">
        <div class="parallax"></div>
    </section>
</div>

@endsection