import * as f from './../../functions';

const url		= new URL(window.location.href),
	check 		= document.querySelector('.models'),
	modelSlider = $('.model_slider'),
	modelInfo 	= $('.model_info');

$.fn.createSlick = function()
{
	if ( check && modelSlider.length && modelInfo.length ) {
		// GET URL PARAMETER SLIDE
		let index 	= parseInt(url.searchParams.get("s")),
			modelParameter = "m",
			model 	= url.searchParams.get(modelParameter),
			buttons = document.querySelectorAll('.model_filter button');
	
		// INITIALIZE SLICK SLIDERS
		modelSlider.slick({
			//initialSlide: index,
			asNavFor: '.model_info',
			lazyLoad: 'ondemand',
			infinite: false,
			slidesToScroll: 1,
			slidesToShow: 3,
			arrows: false,
			centerMode: true,
			centerPadding: '0px',
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
			//initialSlide: index,
			asNavFor: '.model_slider',
			lazyLoad: 'ondemand',
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			draggable: false,
			touchMove: false,
			speed: 0,
			fade: true
		});

		/*
		 * slick filter is bugging the slider occiasonally
		 * create events on slides before filtering
		 *
		 * ON CLICK AND SWIPE:
		 * 	remove classes on old slide
		 * 	add classes to current slide
		 * 
		 * ON CLICK:
		 * 	swipe to current slide
		 */

		// SLICK BUG FIX
		$('.model_slider .slick-slide').on('click', function(event) {
			$('.model_slider .slick-current').removeClass('slick-current slick-center');
			$(this).addClass('slick-current slick-center');

			let div = $(this).parent().children();
			for (let i = 0; i < div.length; i++){
				if (div[i].classList.contains('slick-current')){
					modelSlider[0].slick.slickGoTo(i);
					break;
				}
			}
		})

		// SLICK BUG FIX
		modelSlider.on('afterChange', function(event, slick,  currentSlide){
			let div = $(this).children().children().children();
			div.removeClass('slick-current slick-center');

			for (let i = 0; i < div.length; i++){
				if (currentSlide == i){
					div[i].classList.add('slick-center');
					div[i].classList.add('slick-current');
					break;
				}
			}
		});


		// FILTER ON MODEL IN URL AFTER CREATING CLICKEVENTS ON ALL SLIDES
		for (let i = buttons.length - 1; i >= 0; i--) {
			if (model == buttons[i].value ) {
				filterSlick(buttons[i], modelSlider, modelInfo);
				break;
			}
		}

		// GO TO SLIDE PARAMETER, SET TO 0 IF NOT OK
		let amount 	= document.querySelectorAll('#model_nav .model_slider li').length;
		if ( !index || (amount < index && index > amount) ) {
			index = 0;
		}
		modelSlider[0].slick.slickGoTo(index);

		// UPDATE URL SLIDE PARAMETER
		modelSlider.on('afterChange', function(event, slick,  currentSlide){
			updateURLParameter("s", currentSlide);
		});

		// FILTER ON BUTTON CLICK, FILTER SYNCSLIDER TOO TO SYNC SLIDE INDEX
		// UPDATE URL MODEL PARAMETER
		for (let i = buttons.length - 1; i >= 0; i--) {
			buttons[i].addEventListener('click', function(e) {
				filterSlick(this, modelSlider, modelInfo);

				// change URL depending on button state
				if (buttons[i].classList.contains('active')) {
					updateURLParameter(modelParameter, this.value);
				}
				else {
					removeURLParameter(modelParameter);
				}
			});
		}
	}
}

$.fn.destroySlick = function()
{
	$('.model_slider').slick('unslick');
	$('.model_info').slick('unslick');
}



/*
 * HELPER FUNCTIONS
 */


// not added to history to prevent back/forward failing
function updateURLParameter(parameter, value){
	if (window.history.replaceState) {
		const _url 	= window.location,
		updatedUrl 	= f.updateURLParameter(_url.href, parameter, value)
		window.history.replaceState({'id': 'smoothState'}, _url.pathname, updatedUrl);
	}
}

function removeURLParameter(parameter){
	if (window.history.replaceState) {
		const _url 	= window.location,
		updatedUrl 	= f.removeURLParameter(_url.href, parameter);
		window.history.replaceState({'id': 'smoothState'}, _url.pathname, updatedUrl);
	}
}

function filterSlick(input, slick, syncSlick){
	let slider = $(slick),
		syncSlider = $(syncSlick);

	if (!input.classList.contains('active')) {
		//remove other filter
		slider.slick('slickUnfilter');
		syncSlider.slick('slickUnfilter');
		$(input.parentNode.children).removeClass('active');

		// apply current target
		let className = input.value.split(" ").join(", .");
		slider.slick('slickFilter', ':has(.' + className + ')' );
		syncSlider.slick('slickFilter', ':has(.' + className + ')' );
		input.classList.add('active');

		slider[0].slick.slickGoTo(0, true);
	}
	else { //unfilter
		slider.slick('slickUnfilter');
		syncSlider.slick('slickUnfilter');
		input.classList.remove('active');
	}
}