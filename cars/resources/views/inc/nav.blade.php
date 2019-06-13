<nav id="mp-menu" class="mp-menu">
	<div class="mp-level">
		<h2 class="logo white"><span>Porsche</span>xperience</h2>
		<ul>
			<li><a href="{{ ( $isHome ) ? '#intro' : '/' }}" class="{{ ( $isHome ) ? 'active' : '' }}">Home</a></li>
			@foreach ($categories as $category)
				<?php
				/* 
				 * IF category name is current page OR if category = 'macan'
				 * create li > a
				 * if isset($cars) > if current page add .active
				 * stop current foreach loop -> no submenu is added
				 */
				if (isset($cars) && !$cars->isEmpty() && $cars[0]->category->name == $category->name || $category->name == 'Macan'): ?>
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
								<li><a href="/models/{{$category->name}}?m=boxster">Boxster</a></li>
								<li><a href="/models/{{$category->name}}?m=cayman">Cayman</a></li>
							@endif
							@if ($category->name == '911')
								<li><a href="/models/{{$category->name}}?m=carrera">Carrera S</a></li>
								<li><a href="/models/{{$category->name}}?m=cabriolet%20speedster">Cabriolet</a></li>
								<li><a href="/models/{{$category->name}}?m=rs">Racing Sport</a></li>
							@endif
							@if (strtolower($category->name) == 'panamera')
								<li><a href="/models/{{$category->name}}?m=sport%20turismo">Sport Turismo</a></li>
								<li><a href="/models/{{$category->name}}?m=executive">Executive</a></li>
								<li><a href="/models/{{$category->name}}?m=turbo">Turbo</a></li>
								<li><a href="/models/{{$category->name}}?m=e-hybrid">E-Hybrid</a></li>
							@endif
							@if (strtolower($category->name) == 'cayenne')
								<li><a href="/models/{{$category->name}}?m=s">Sport</a></li>
								<li><a href="/models/{{$category->name}}?m=turbo">Turbo</a></li>
								<li><a href="/models/{{$category->name}}?m=coupé">Coupé</a></li>
							@endif
						</ul>
					</div>
					@endif
				</li>
			@endforeach
		</ul>
	</div>
</nav>