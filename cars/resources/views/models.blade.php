@extends('layouts.app')

@section('content')
@if ($cars->isEmpty())

<div class="full-center not_found">
    <p class="msg">Model not found!</p>
    <ul class="flex">
        @foreach ($categories as $category)
        <li><a href="/models/{{ strtolower($category->name) }}" class="models">{{ $category->name }}</a></li>
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

        <img src="/img/{{ strtolower($cars[0]->category->name) }}/sequence/1.webp" alt="360 view of {{ $cars[0]->category->name }}">
        <div class="img_cover left">
            @if ( $cars[0]->category->title_1 != '' && $cars[0]->category->desc_1 != '')
            <div class="content c1 flex">
                <h1>{{ $cars[0]->category->title_1 }}</h1>
                <p>{{ $cars[0]->category->desc_1 }}</p>
            </div>
            @endif
            @if ( $cars[0]->category->title_2 != '' && $cars[0]->category->desc_2 != '')
            <div class="content c2 flex">
                <h1>{{ $cars[0]->category->title_2 }}</h1>
                <p>{{ $cars[0]->category->desc_2 }}</p>
            </div>
            @endif
            <div class="content c3 flex">
                <h1>{{ $cars[0]->category->name }} Models</h1>
                @if ( $cars[0]->price != '')
                <p>From &euro;{{ $cars[0]->price }} incl. tax</p>
                @endif
            </div>
        </div>
    </div>
    <div id="scroll_indicator">
        <a href="#model_nav" data-hover="Start Exploring >" class="hover_effect h_dark">Start Exploring</a>
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
            (strtolower($cars[0]->category->name) == 'panamera') ||
            (strtolower($cars[0]->category->name) == 'cayenne'))
            <div class="model_filter container">
                <div class="row">
                @if ($cars[0]->category->name == '718')
                    <button class="btn" value="boxster">Boxster</button>
                    <button class="btn" value="cayman">Cayman</button>
                @endif
                @if ($cars[0]->category->name == '911')
                    <button class="btn" value="carrera">Carrera</button>
                    <button class="btn" value="cabriolet speedster">Cabriolet</button>
                    <button class="btn" value="rs">Racing Sport</button>
                @endif
                @if (strtolower($cars[0]->category->name) == 'panamera')
                    <button class="btn" value="sport turismo">Sport Turismo</button>
                    <button class="btn" value="executive">Executive</button>
                    <button class="btn" value="turbo">Turbo</button>
                    <button class="btn" value="e-hybrid">E-Hybrid</button>
                @endif
                <?php // NO MACAN FILTER ?>
                @if (strtolower($cars[0]->category->name) == 'cayenne')
                    <button class="btn" value="s">Sport</button>
                    <button class="btn" value="turbo">Turbo</button>
                    <button class="btn" value="coupé">Coupé</button>
                @endif
                </div>
            </div>
        @endif

        <div class="container">
            <div class="name_bg {{ (startsWithNumber($cars[0]->category->name)) ? '_'.$cars[0]->category->name : $cars[0]->category->name }}">
                <h1>{{$cars[0]->category->name}}</h1>
            </div>
        </div>

        <ul class="model_slider">
            @foreach ($cars as $model)
            <?php
                // FIX MODEL NAMES THAT START WITH NUMBER
                $name = strtolower($model->name);
                if (startsWithNumber($name)){
                    $name = substr_replace($name, '_', 0, 0);
                }
            ?>
            <li class="{{$name}}">
                <img src="/img/{{strtolower($model->category->name)}}/{{strtolower($model->category->name)}}_{{strtolower(str_replace(' ', '_', $model->name))}}.png" alt="{{$cars[0]->category->name}} {{$model->name}}">
                <p class="m"><span>{{$model->category->name}}</span>
                @if ($model->name != '')
                <span>{{$model->name}}</span>
                @endif
                </p>
            </li>
            @endforeach
        </ul>
    </nav>

    <div class="model_info">
        @foreach ($cars as $model)
        <?php
            // FIX MODEL NAMES THAT START WITH NUMBER
            $name = strtolower($model->name);
            if (startsWithNumber($name)){
                $name = substr_replace($name, '_', 0, 0);
            }
        ?>
        <section class="model_section {{$name}}" id="car_{{$model->id}}">
            <div class="dark">
                <div class="container flex">
                    <div class="dimensions">
                        @if ($model->height != 0)
                        <div class="height dim">{{$model->height}} mm</div>
                        @endif
                        <img src="/img/{{strtolower($model->category->name)}}/{{strtolower($model->category->name)}}_{{strtolower(str_replace(' ', '_', $model->name))}}.png">
                        @if ($model->height != 0)
                        <div class="length dim">{{$model->length}} mm</div>
                        @endif
                        @if ($model->height != 0)
                        <div class="width dim"></div>
                        <span class="width_txt">{{$model->width}} mm</span>
                        @endif
                    </div>
                    <div class="model_intro">
                        <h2>{{$cars[0]->category->name}} {{$model->name}}</h2>
                        <a href="https://www.porsche.com/belgium/nl/models/{{$model->category->name}}/" target="_blank">Official Porsche Site</a>
                        <p>From &euro;{{$model->price}} incl. tax</p>
                    </div>
                </div>
            </div>
            <div class="container details">
                <div class="row">
                    <div class="col">
                    <p>{{$model->name}}</p>
                    <p>{{$model->price}}</p>
                    <p>{{$model->pk}}</p>
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
                    </div>
                </div>
            </div>            
            <!--<img data-lazy="img/lazyfonz1.png"/> -->
        </section>
        @endforeach
    </div>
</div>
@endif
@endsection