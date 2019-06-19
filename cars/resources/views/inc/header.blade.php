<div class="container">
    <div class="row">
        <div class="col">
            <a href="{{ ( $isHome ) ? '#intro' : '/' }}" class="logo"><span>Porsche</span>xperience</a>
        </div>
        @if (Request::segment(1) == 'models' && !$cars->isEmpty() )
        <div class="col model_name">
            <span class="model_header">{{$cars[0]->category->name}}</span>
        </div>
        @endif
        <div class="col flex">
            <div class="menu-icon-wrapper hidden" id="mp-trigger">
                @include('inc.svg/hamburger')
            </div>
        </div>
    </div>
</div>