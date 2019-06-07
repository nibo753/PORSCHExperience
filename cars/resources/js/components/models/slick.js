const url		= new URL(window.location.href),
	check 		= document.querySelector('.models'),
	modelSlider = $('.model_slider'),
	modelInfo 	= $('.model_info');

$.fn.createSlick = function()
{
	if ( check && modelSlider.length && modelInfo.length ) {
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

		//update class .slick-current
		modelSlider[0].slick.slickGoTo(index);

		// UPDATE URL ON CHANGE
		updateSlickUrl(modelSlider);
		checkboxFilterSlick(modelSlider, '.model_filter input[type="checkbox"]');
		
	}
}

$.fn.destroySlick = function()
{
	$('.model_slider').slick('unslick');
	$('.model_info').slick('unslick');
}


// not added to history to prevent back/forward failing
function updateSlickUrl(slick){
	$(slick).on('afterChange', function(event, slick,  currentSlide, nextSlide) {
		if (window.history.replaceState) {
			const updateUrl 	= url.origin + url.pathname + '?slide=' + currentSlide;
			window.history.replaceState(currentSlide, 'slide', updateUrl);
		}
	});
}

function checkboxFilterSlick(slick, checkbox){
	let checkboxes = document.querySelectorAll(checkbox);

	for (var i = checkboxes.length - 1; i >= 0; i--) {
		checkboxes[i].addEventListener('change', function(e) {
			console.log($(slick));
			if (!this.checked) {
				//slickfilter uses jquery selector
				$(slick).slick('slickUnfilter');
				$(slick).slick('slickFilter', ':not(:has(.' + this.value + '))' );
			}
			else {
				$(slick).slick('slickUnfilter');
			}
		});
	}
}