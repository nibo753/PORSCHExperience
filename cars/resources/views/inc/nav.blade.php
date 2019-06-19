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
				$nameLowerCase = strtolower($category->name);
				
				if (isset($cars) && !$cars->isEmpty() && $cars[0]->category->name == $category->name || $category->name == 'Macan'): ?>
		 				<li><a href="/models/{{ $nameLowerCase }}" class="{{ (isset($cars[0]['category']['name'])) ? ( ($cars[0]['category']['name'] == $category->name) ? 'active' : '' ) : '' }}">{{$category->name}}</a></li>
					<?php
		 			continue;
	 			endif ?>
				<li>
					<a href="/models/{{ $nameLowerCase }}" class="{{ !empty($category->cars) ? 'arrow left' : '' }}">{{ $category->name }}</a>
					@if (!empty($category->cars))
					<div class="mp-level">
						<h2>{{ $category->name }}</h2>
						<a class="mp-back arrow right" href="">Back</a>
						<ul>
							@if ($nameLowerCase == '718')
								<li><a href="/models/{{$nameLowerCase}}?m=boxster">Boxster</a></li>
								<li><a href="/models/{{$nameLowerCase}}?m=cayman">Cayman</a></li>
							@endif
							@if ($nameLowerCase == '911')
								<li><a href="/models/{{$nameLowerCase}}?m=carrera">Carrera S</a></li>
								<li><a href="/models/{{$nameLowerCase}}?m=cabriolet%20speedster">Cabriolet</a></li>
								<li><a href="/models/{{$nameLowerCase}}?m=rs">Racing Sport</a></li>
							@endif
							@if ($nameLowerCase == 'panamera')
								<li><a href="/models/{{$nameLowerCase}}?m=sport%20turismo">Sport Turismo</a></li>
								<li><a href="/models/{{$nameLowerCase}}?m=executive">Executive</a></li>
								<li><a href="/models/{{$nameLowerCase}}?m=turbo">Turbo</a></li>
								<li><a href="/models/{{$nameLowerCase}}?m=e-hybrid">E-Hybrid</a></li>
							@endif
							@if ($nameLowerCase == 'cayenne')
								<li><a href="/models/{{$nameLowerCase}}?m=s">Sport</a></li>
								<li><a href="/models/{{$nameLowerCase}}?m=turbo">Turbo</a></li>
								<li><a href="/models/{{$nameLowerCase}}?m=coupé">Coupé</a></li>
							@endif
						</ul>
					</div>
					@endif
				</li>
			@endforeach
			<li><a href="/gallery" class="{{ ( $isGallery ) ? 'active' : '' }}">Gallery</a></li>
		</ul>
	</div>
</nav>