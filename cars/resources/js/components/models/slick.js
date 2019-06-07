const url		= new URL(window.location.href),
	check 		= document.querySelector('.models'),
	modelSlider = $('.model_slider'),
	modelInfo 	= $('.model_info');

$.fn.createSlick = function()
{
	if ( check && modelSlider.length && modelInfo.length ) {
		// GET URL PARAMETER SLIDE
		let index 	= parseInt(url.searchParams.get("slide")),
			amount 	= document.querySelectorAll('#model_nav .model_slider li').length;

		// IF NOT OK SET SLIDE PARAMETER TO 0 
		if ( !index || (amount < index && index > amount) ) {
			index = 0;
		}
		
		// INITIALIZE SLICK SLIDERS
		modelSlider.slick({
			initialSlide: index,
			asNavFor: '.model_info',
			infinite: false,
			slidesToScroll: 1,
			slidesToShow: 3,
			arrows: false,
			centerMode: true,
			centerPadding: '0px',
			focusOnSelect: true,
			swipeToSlide: true,
			responsive: [
			{
			breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					arrows: true
				}
			},
			{
			breakpoint: 600,
				settings: {
					slidesToShow: 1,
					centerPadding: '50px',
				}
			}]
		});

		modelInfo.slick({
			initialSlide: index,
			asNavFor: '.model_slider',
			lazyLoad: 'ondemand',
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			draggable: false,
			touchMove: false,
			speed: 0,
			fade: true
		});


		// UPDATE CLASS .slick-current TO URL SLIDE PARAMETER
		modelSlider[0].slick.slickGoTo(index);

		// UPDATE URL ON CHANGING SLIDE
		updateSlickUrl(modelSlider);

		// FILTER ON BUTTON CLICK
		buttonFilterSlick(modelSlider, '.model_filter button', modelInfo);

		// IF CAR OUT OF VIEW DUE TO FILTER, GO TO SLIDE
		modelSlider.on('reInit', function(event){
			let slide = modelSlider.slick('slickCurrentSlide');
			modelSlider[0].slick.slickGoTo(slide, true);
			modelInfo[0].slick.slickGoTo(slide, true);
		});


		/*
		 *
		 * slick filter is bugging the slider occiasonally
		 * manually fix it when clicked or swiping
		 *
		 */

		$('.model_slider .slick-slide').on('click', function(event) {
			$('.model_slider .slick-current').removeClass('slick-current');
			$(this).addClass('slick-current');

			let div = $(this).parent().children();
			for (var i = 0; i < div.length; i++){
				if (div[i].classList.contains('slick-current')){
					modelSlider[0].slick.slickGoTo(i);
					break;
				}
			}
		})

		modelSlider.on('afterChange', function(event, slick,  currentSlide){
			let div = $(this).children().children().children();
			div.removeClass('slick-current')

			for (var i = 0; i < div.length; i++){
				if (currentSlide == i){
					div[i].classList.add('slick-current');
					break;
				}
			}
		});
	}
}

$.fn.destroySlick = function()
{
	$('.model_slider').slick('unslick');
	$('.model_info').slick('unslick');
}


// not added to history to prevent back/forward failing
function updateSlickUrl(slick){
	$(slick).on('afterChange', function(event, slick,  currentSlide) {
		if (window.history.replaceState) {
			const updateUrl 	= url.origin + url.pathname + '?slide=' + currentSlide;
			window.history.replaceState(currentSlide, 'slide', updateUrl);
		}
	});
}

function buttonFilterSlick(slick, input, syncSlick){
	let buttons = document.querySelectorAll(input);

	for (var i = buttons.length - 1; i >= 0; i--) {
		buttons[i].addEventListener('click', function(e) {
			let slider = $(slick);
			if (!this.classList.contains('active')) {
				//remove other filter
				slider.slick('slickUnfilter');
				$(buttons).removeClass('active');

				// apply current target
				let className = this.value.split(" ").join(", .");
				slider.slick('slickFilter', ':has(.' + className + ')' );
				this.classList.add('active');
			}
			else { //unfilter
				slider.slick('slickUnfilter');
				this.classList.remove('active');
			}
		});
	}
}