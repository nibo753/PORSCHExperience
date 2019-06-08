<nav id="mp-menu" class="mp-menu">
	<div class="mp-level">
		<h2 class="logo white"><span>Porsche</span>xperience</h2>
		<ul>
			<li><a href="{{ ( $isHome ) ? '#intro' : '/' }}" class="{{ ( $isHome ) ? 'active' : '' }}">Home</a></li>
			@foreach ($categories as $category)
				<?php
				/* 
				 * IF category name is current page OR if category = 'macan' or IF category = 'cayenne'
				 * create li > a
				 * if isset($cars) > if current page add .active
				 * stop current foreach loop -> no submenu is added
				 */
				if (isset($cars) && !$cars->isEmpty() && $cars[0]->category->name == $category->name || $category->name == 'Macan' || $category->name == 'Cayenne'): ?>
		 				<li><a href="/models/{{ $category->name }}" class="{{ (isset($cars[0]['category']['name'])) ? ( ($cars[0]['category']['name'] == $category->name) ? 'active' : '' ) : '' }}">{{$category->name}}</a></li>
					<?php
		 			continue;
	 			endif ?>
				<li>
					<a href="/models/{{ $category->name }}" class="{{ !empty($category->cars) ? 'arrow left' : '' }}">{{ $category->name }}</a>
					@if (!empty($category->cars))
					<div class="mp-level">
						<h2>{{ $category->name }}</h2>
						<a class="mp-back arrow right" href="">Back</a>
						<ul>
							@if ($category->name == '718')
								<li><a href="/models/{{$category->name}}?m=Boxster">Boxster</a></li>
								<li><a href="/models/{{$category->name}}?m=Cayman">Cayman</a></li>
							@endif
							@if ($category->name == '911')
								<li><a href="/models/{{$category->name}}?m=Carrera">Carrera S</a></li>
								<li><a href="/models/{{$category->name}}?m=Cabriolet%20Speedster">Cabriolet</a></li>
								<li><a href="/models/{{$category->name}}?m=RS">Racing Sport</a></li>
							@endif
							@if ($category->name == 'Panamera')
								<li><a href="/models/{{$category->name}}?m=Sport%20Turismo">Sport Turismo</a></li>
								<li><a href="/models/{{$category->name}}?m=Executive">Executive</a></li>
								<li><a href="/models/{{$category->name}}?m=Turbo">Turbo</a></li>
								<li><a href="/models/{{$category->name}}?m=E-Hybrid">E-Hybrid</a></li>
							@endif
						</ul>
					</div>
					@endif
				</li>
			@endforeach
		</ul>
	</div>
</nav>