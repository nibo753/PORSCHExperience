@extends('layouts.app')

@section('content')
<nav id="sideNav">
    <ul>
        @foreach ($cars as $category => $value)
        <li>
            <a href="#_{{ $value->name }}" data-car="{{ $value->id }}" class="list-group-item"><span>{{ $value->name }}</span><img src="/img/cars/overview/{{ $value->name }}.png"></a>
        </li>
        @endforeach
        <li>
            <a href="#mission-e" class="list-group-item"><span>Mission-E</span><img src="/img/cars/overview/mission-e.png"></a>
        </li>
    </ul>
</nav>

@endsection