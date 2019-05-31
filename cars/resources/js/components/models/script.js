$(function () {
    var c     = new ScrollMagic.Controller(),
        check = document.querySelector('.models');

    if ( check ) {
		$('.model_slider').slick({
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
					slidesToShow: 1
				}
			}]
		});

		$('.model_info').slick({
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


		



    }
});