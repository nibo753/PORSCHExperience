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
        <script type="text/javascript">
            var imageSequenceCounter = <?= json_encode($imgCount); ?>;
            var imageSequenceModel = <?= json_encode($cars[0]->category->name); ?>;
        </script>
        <img src="/img/{{ $cars[0]->category->name }}/sequence/1.webp" alt="image of {{ $cars[0]->category->name }}">
        <div class="img_cover left">
            <div class="content c1 flex">
                <h1>Design</h1>
                <p>Tijdloos en eigentijds waren nog nooit zo dicht bij elkaar.</p>
            </div>
            <div class="content c2 flex">
                <h1>Tijdloos</h1>
                <p>De nieuwe 911 is het resultaat van alle voorgangers – en zodoende zowel retrospectief als een toekomstvisie. Het silhouet: iconisch. Het design: tijdloos. De technologie: geïnspireerd op grote overwinningen en altijd een stap vooruit. Met de 8e generatie van de 911 stevenen we af op de toekomst.</p>
            </div>
            <div class="content c3 flex">
                <h1>{{ $cars[0]->category->name }} Modellen</h1>
                <p>Vanaf &euro;{{ $cars[0]->price }} incl. BTW</p>
            </div>
        </div>
    </div>
    @endif


    <nav class="" id="model_nav">
        <ul class="model_slider">
            @foreach ($cars as $model)
            <li class="{{$model->name}}">
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
    
    <?php
    $allClasses = array();
    foreach ($cars as $model) {
        $classes = explode(" ", $model->name);
        foreach ($classes as $className) {
            if (!in_array($className, $allClasses)) {
                array_push($allClasses, $className);
            }
        }
    } ?>
    <form class="model_filter" action="" method="">
    @foreach($allClasses as $className)
        <input type="checkbox" name="{{$className}}" value="{{$className}}" checked>{{$className}}<br>
    @endforeach
    </form>
    



    <div class="model_info">
        @foreach ($cars as $model)
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