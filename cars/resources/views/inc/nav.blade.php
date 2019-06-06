<nav id="mp-menu" class="mp-menu">
	<div class="mp-level">
		<h2 class="logo white"><span>Porsche</span>xperience</h2>
		<ul>
			<li><a href="{{ ( $isHome ) ? '#intro' : '/' }}" class="{{ ( $isHome ) ? 'active' : '' }}">Home</a></li>
			@foreach ($categories as $category)
				<?php
				/*
				 * if category is current page
				 * create li > a
				 * stop loop (no submenu)
				 */
				if (isset($cars) && !$cars->isEmpty() && $cars[0]->category->name == $category->name): ?>
		 			<li><a href="" class="active">{{ $category->name }}</a></li>
		 			<?php continue;
	 			endif ?>
				<li>
					<a href="/models/{{ $category->name }}" class="{{ !empty($category->cars) ? 'arrow left' : '' }}">{{ $category->name }}</a>
					@if (!empty($category->cars))
					<div class="mp-level">
						<h2>{{ $category->name }}</h2>
						<a class="mp-back arrow right" href="">Back</a>
						<ul>
							@foreach ($category->cars as $key => $name)
								<li><a href="/models/{{$category->name}}?slide={{$key}}">{{ $name != "" ? $name : $category->name }}</a></li>
							@endforeach
						</ul>
					</div>
					@endif
				</li>
			@endforeach
		</ul>
	</div>
</nav>