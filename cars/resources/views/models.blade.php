@extends('layouts.app')

@section('content')
@if ($cars->isEmpty())

<div class="full-center not_found">
    <p class="msg">Model not found!</p>
    <ul class="flex">
        @foreach ($categories as $category)
        <li><a href="/models/{{ $category->name }}" class="models">{{ $category->name }}</a></li>
        @endforeach
    </ul>
</div>

@else
<div id="modelContainer">        
    <nav id="modelNav" class="carousel slide" data-interval="false">
        <h1>{{ $cars[0]->category->name }}</h1>

        <ul class="carousel-inner">
            @foreach ($cars as $key => $model)
            <li class="carousel-item {{ ($key == 0) ? 'active' : '' }}">{{$model->category->name}} {{$model->name}}</li>
            @endforeach
        </ul>

        <ol class="carousel-indicators">
            @foreach ($cars as $key => $model)
            <li data-target="#modelNav" data-slide-to="{{ $key }}" class="{{ ($key == 0) ? 'active' : '' }}"></li>
            @endforeach
        </ol>

        <a class="carousel-control-prev" href="#modelNav" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#modelNav" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </nav>

    @foreach ($cars as $key => $model)
        <section class="model {{ ($key == 0) ? 'active' : '' }}" id="car_{{$model->id}}">
            {{$model}}
        </section>
    @endforeach
</div>












@endif
@endsection