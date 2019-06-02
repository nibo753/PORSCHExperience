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
<div id="model_container">
    @if ( $imgCount != 0)
    <div id="image_sequence">
        <img src="/img/{{ $cars[0]->category->name }}/sequence/0.webp" alt="image of {{ $cars[0]->category->name }}">
    </div>
    <script type="text/javascript">
        var imageSequenceCounter = <?= json_encode($imgCount); ?>;
        var imageSequenceModel = <?= json_encode($cars[0]->category->name); ?>;
    </script>
    @endif


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
            <p>{{$model->name}}</p>
            <p>{{$model->price}}</p>
            <p>{{$model->pk}}</p>
            <p>{{$model->kw}}</p>
            <p>{{$model->topspeed}}</p>
            <p>{{$model->acceleration}}</p>
            <p>{{$model->acceleration_sport}}</p>
            <p>{{$model->fuel_consuption}}</p>
            <p>{{$model->emission}}</p>
            <p>{{$model->drive}}</p>
            <p>{{$model->height}}</p>
            <p>{{$model->width}}</p>
            <p>{{$model->length}}</p>
            <p>{{$model->weight}}</p>
            <p>{{$model->luggage}}</p>
            
            <!--<img data-lazy="img/lazyfonz1.png"/> -->
        </section>
        @endforeach
    </div>
</div>












@endif
@endsection