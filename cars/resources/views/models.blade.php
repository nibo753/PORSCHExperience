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
    
    <?php
        function startsWithNumber($str) {
            return preg_match('/^\d/', $str) === 1;
        }
    ?>

    <nav id="model_nav">
        @if (($cars[0]->category->name == '718') ||
            ($cars[0]->category->name == '911') ||
            ($cars[0]->category->name == 'Panamera'))
            <div class="model_filter container">
                <div class="row">
                @if ($cars[0]->category->name == '718')
                    <button class="btn" value="Boxster">Boxster</button>
                    <button class="btn" value="Cayman">Cayman</button>
                @endif
                @if ($cars[0]->category->name == '911')
                    <button class="btn" value="Carrera">Carrera</button>
                    <button class="btn" value="Cabriolet Speedster">Cabriolet</button>
                    <button class="btn" value="RS">Racing Sport</button>
                @endif
                @if ($cars[0]->category->name == 'Panamera')
                    <button class="btn" value="Sport Turismo">Sport Turismo</button>
                    <button class="btn" value="Executive">Executive</button>
                    <button class="btn" value="Turbo">Turbo</button>
                    <button class="btn" value="E-Hybrid">E-Hybrid</button>
                @endif
                <?php // NO MACAN OR CAYENNE FILTER ?>
                </div>
            </div>
        @endif

        <div class="container">
            <div class="name_bg">
                <h1>{{$cars[0]->category->name}}</h1>
            </div>
        </div>

        <ul class="model_slider">
            @foreach ($cars as $model)
            <?php
                // FIX MODEL NAMES THAT START WITH NUMBER
                $name = $model->name;
                if (startsWithNumber($name)){
                    $name = substr_replace($name, '_', 0, 0);
                }
            ?>
            <li class="{{$name}}">
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
        @foreach ($cars as $model)
        <?php
            // FIX MODEL NAMES THAT START WITH NUMBER
            $name = $model->name;
            if (startsWithNumber($name)){
                $name = substr_replace($name, '_', 0, 0);
            }
        ?>
        <section class="model {{$name}}" id="car_{{$model->id}}">
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