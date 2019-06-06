<nav id="mp-menu" class="mp-menu">
	<div class="mp-level">
		<h2 class="">PORSCHExperience</h2>
		<ul>
			<li><a href="#">Home</a></li>
			@foreach ($categories as $category)
				<li>
					<a href="#">{{ $category->name }}</a>
					<div class="mp-level">
						<h2 class="">{{ $category->name }}</h2>
						<a class="mp-back" href="#">back</a>
						<ul>
							@foreach ($category->cars as $name)
								<li><a href="#">{{ $name != "" ? $name : "Standard" }}</a></li>
							@endforeach
						</ul>
					</div>
				</li>
			@endforeach
		</ul>
	</div>
</nav>