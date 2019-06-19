@extends('layouts.app')

@section('content')
<?php use App\Http\Controllers\RouteController; ?>
<script type="text/javascript">
    //var newMedia = <?= json_encode( RouteController::getNewInstagramMedia(21) ); ?>;
</script>

@if ($medias != '')
<div class="gallery_container container">
    <div class="row">
        @foreach ($medias as $key => $media)
        @if ($media->getType() == 'image')
            <div class="col-12 col-sm-6 col-lg-4">
                <a href="{{$media->getLink()}}" target="_blank" class="img_container">
                    <img src="{{$media->getImageThumbnailUrl()}}">
                    <span class="caption">{{$media->getCaption()}}</span>
                    <div class="counters">
                        <span class="like">@include('inc.svg/like'){{$media->getLikesCount()}}</span>
                        <span class="comment">@include('inc.svg/comments') {{$media->getCommentsCount()}}</span>
                    </div>
                </a>
            </div>
            @endif
        @endforeach
        {{ $medias->links() }}
    </div>
</div>
@else
<div>
    <h1>Oops! Servers are too busy</h1>
    <p>Check out the <a href="https://www.instagram.com/porschebelgium/">Official Instagram</a> yourself!</p>
</div>
@endif

@endsection