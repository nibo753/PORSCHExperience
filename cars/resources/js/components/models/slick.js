$.fn.createSlick = function()
{
	const check = document.querySelector('.models'),
	modelSlider = $('.model_slider'),
	modelInfo 	= $('.model_info');

	if ( check && modelSlider.length && modelInfo.length ) {
		const url	= new URL(window.location.href);

		let index 	= parseInt(url.searchParams.get("slide")),
			amount 	= document.querySelectorAll('#model_nav .model_slider li').length;

		// if index undefined or not within slider range
		if ( !index || (amount < index && index > amount) ) {
			index = 0;
		}
		
		
		// INITIALIZE SLICK SLIDERS
		modelSlider.slick({
			initialSlide: index,
			asNavFor: '.model_info',
			slidesToScroll: 1,
			slidesToShow: 3,
			arrows: false,
			centerMode: true,
			centerPadding: '0px',
			focusOnSelect: true,
			responsive: [
			{
			breakpoint: 1024,
				settings: {
					slidesToShow: 3,
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

		//update class slick-current
		modelSlider[0].slick.slickGoTo(index);

		// UPDATE URL ON CHANGE
		// not added to history to prevent back/forward failing
		modelSlider.on('afterChange', function(event, slick,  currentSlide, nextSlide) {		
			if (window.history.replaceState) {
				let updateUrl 		= url.origin + url.pathname + '?slide=' + currentSlide;
				window.history.replaceState(currentSlide, 'slide', updateUrl);
			}
		});
	}
}

$.fn.destroySlick = function()
{
	$('.model_slider').slick('unslick');
	$('.model_info').slick('unslick');
}