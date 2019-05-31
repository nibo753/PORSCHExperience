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
    <nav class="">
        <ul class="model_slider">
            @foreach ($cars as $key => $model)
            <li>
                <img src="/img/{{$model->category->name}}/{{$model->category->name}}_{{str_replace(' ', '_', $model->name)}}.png" alt="{{$model->name}}">
                <span>{{$model->category->name}}</span>
                @if ($model->name != '')
                <span>{{$model->name}}</span>
                @endif
                @if ($model->price != 0)
                <p>Vanaf {{ $model->price }} incl. BTW</p>
                @endif
            </li>
            @endforeach
        </ul>
    </nav>
    <div class="model_info">
        @foreach ($cars as $key => $model)
        <section class="model" id="car_{{$model->id}}">
            {{$model->name}}
            {{$model->price}}
            {{$model->pk}}
            {{$model->kw}}
            {{$model->topspeed}}
            {{$model->acceleration}}
            {{$model->acceleration_sport}}
            {{$model->fuel_consuption}}
            {{$model->emission}}
            {{$model->drive}}
            {{$model->height}}
            {{$model->width}}
            {{$model->length}}
            {{$model->weight}}
            {{$model->luggage}}
            
            <!--<img data-lazy="img/lazyfonz1.png"/> -->
        </section>
        @endforeach
    </div>
</div>












@endif
@endsection