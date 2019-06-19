@extends('layouts.app')

@section('content')
@if ($cars->isEmpty())

<div class="full-center not_found">
    <h1>Model not found!</h1>
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
            var imageSequenceModel = <?= json_encode(strtolower($cars[0]->category->name)); ?>;
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
        <a href="#model_nav" data-hover="Loading ..." class="hover_effect h_dark disabled">Loading</a>
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

        <div class="container name_container">
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
                    <div class="img_container">
                        <img src="/img/{{strtolower($model->category->name)}}/{{strtolower($model->category->name)}}_{{strtolower(str_replace(' ', '_', $model->name))}}.png">
                    </div>
                    <div class="model_intro">
                        <h2>{{$cars[0]->category->name}} {{$model->name}}</h2>
                        <a href="https://www.porsche.com/belgium/nl/models/{{$model->category->name}}/" target="_blank">Official Porsche Site</a>
                        <p>From &euro;{{$model->price}} incl. tax</p>
                    </div>
                </div>
            </div>
            <div class="details">
                <div class="container">
                    <h2>Technische gegevens</h2>
                    <div class="row performance">
                        <div class="col">
                            <h3>Prestaties</h3>
                            <ul>
                                <li>
                                    <span>Topsnelheid (km/u)</span>
                                    <span>{{$model->topspeed}}</span>
                                </li>
                                <li>
                                    <span>0 tot 100 km/u {{ ($model->acceleration_sport == '') ? 'met Sport Pakket ' : '' }}(sec)</span>
                                    <span>{{$model->acceleration}}</span>
                                </li>
                                @if ($model->acceleration_sport != '')
                                <li>
                                    <span>0 tot 100 km/u met Sport Pakket (sec)</span>
                                    <span>{{$model->acceleration_sport}}</span>
                                </li>
                                @endif
                                <li>
                                    <span>Vermogen (pk)</span>
                                    <span>{{$model->pk}}</span>
                                </li>
                                <li>
                                    <span>Vermogen (kW)</span>
                                    <span>{{$model->kw}}</span>
                                </li>
                                <li>
                                    <span>Aandrijving</span>
                                    <span>{{$model->drive}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row dimensions">
                        <div class="col">
                            <h3>Afmetingen</h3>
                            <ul>
                                <li>
                                    <span>Lengte (mm)</span>
                                    <span>{{$model->length}}</span>
                                </li>
                                <li>
                                    <span>Breedte (mm)</span>
                                    <span>{{$model->width}}</span>
                                </li>
                                <li>
                                    <span>Hoogte (mm)</span>
                                    <span>{{$model->height}}</span>
                                </li>
                                <li>
                                    <span>Leeggewicht (kg)</span>
                                    <span>{{$model->weight}}</span>
                                </li>
                                <li>
                                    <span>Kofferbakvolume (l)</span>
                                    <span>{{$model->luggage}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row usage">
                        <div class="col">
                            <h3>Verbruik en Uitstoot (NEDC)</h3>
                            <ul>
                                <li>
                                    <span>Brandstofverbruik (l/100km)</span>
                                    <span>{{$model->fuel_consumption}}</span>
                                </li>
                                @if ($model->power_consumption != '')
                                <li>
                                    <span>Stroomverbruik (kWh/100km)</span>
                                    <span>{{$model->power_consumption}}</span>
                                </li>
                                @endif
                                <li>
                                    <span>CO-2 Uitstoot (g/km)</span>
                                    <span>{{$model->emission}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h4>NEDC</h4>
                            <p>De waarden van het brandstofverbruik en de CO2-uitstoot worden gemeten volgens een nieuwe WLTP-regelgeving (EU-verordening 2017/948) waarna de waarden worden omgezet naar de NEDC-cyclus om ze te vergelijken met andere voertuigen. Neem contact op met uw verkooppunt voor bijkomende informatie. De waarden houden geen rekening met de gebruiksomstandigheden, de rijstijl, de uitrusting of de opties en kunnen variëren naargelang de gebruikte banden. Op de website energievreters is een gids voor brandstofverbruik en CO2-uitstoot met gegevens voor alle nieuwe personenwagens beschikbaar: <a href="http://www.schoneauto.be" target="_blank">www.schoneauto.be</a>.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h4>WLTP</h4>
                            <p>De vermelde waarden van het brandstofverbruik en de CO2-uitstoot zijn conform de WLTP-homologatie (EU-verordening 2017/948). Sinds 1 september 2018 worden nieuwe wagens goedgekeurd op basis van de wereldwijd geharmoniseerde testprocedure voor lichte voertuigen (WLTP), een nieuwe, meer realistische testprocedure om het brandstofverbruik en de CO₂-uitstoot te meten. Deze WLTP-procedure vervangt volledig de nieuwe Europese rijcyclus (NEDC), de vroegere testprocedure. Omdat de testvoorwaarden veel realistischer zijn, liggen het brandstofverbruik en de CO₂-uitstoot volgens de WLTP-procedure in veel gevallen hoger dan de waarden gemeten volgens de NEDC-procedure. De waarden van het brandstofverbruik en de CO2-uitstoot kunnen variëren naargelang specifieke uitrusting, opties en type remmen. Neem contact op met uw verkooppunt voor meer inlichtingen.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        @endforeach
    </div>
</div>
@endif
@endsection