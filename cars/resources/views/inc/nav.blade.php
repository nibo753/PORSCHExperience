<nav id="mp-menu" class="mp-menu">
	<div class="mp-level">
		<h2 class="logo white"><span>Porsche</span>xperience</h2>
		<ul>
			<li><a href="{{ ( $isHome ) ? '#intro' : '/' }}">Home</a></li>
			@foreach ($categories as $category)
				<li>
					<a href="/models/{{ $category->name }}" class="{{ !empty($category->cars) ? 'arrow left' : '' }}">{{ $category->name }}</a>
					@if (!empty($category->cars))
					<div class="mp-level">
						<h2>{{ $category->name }}</h2>
						<a class="mp-back arrow right" href="">Back</a>
						<ul>
							@foreach ($category->cars as $name)
								<li><a href="/models/{{$category->name}}?model={{ $name != "" ? $name : $category->name }}">{{ $name != "" ? $name : $category->name }}</a></li>
							@endforeach
						</ul>
					</div>
					@endif
				</li>
			@endforeach
		</ul>
	</div>
</nav>