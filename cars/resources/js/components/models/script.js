$(function () {
    var c     = new ScrollMagic.Controller(),
        check = document.querySelector('.models');

    if ( check ) {
    	// change active section on nav change
		$('#modelNav').on('slide.bs.carousel', function () {
			var items = document.querySelectorAll('#modelNav .model-list li'),
			  section = document.querySelectorAll('#modelContainer section.model');

			for (var i = items.length - 1; i >= 0; i--) {
				if (items[i].classList.contains('active')) {
					section[i].classList.add('active');
				}
				else {
					section[i].classList.remove('active');
				}
			}
		})

		/*
		$('#modelNav').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.slider-nav'
		});*/



    }
});