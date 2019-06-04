window.w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
window.h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

/*
 * Load jQuery and preLoader
 */
require('./bootstrap');
require('./lib/jpreloader');

/*
 * Create export functions for page-transition.js
 * required for files that use $(document).ready()
 * 
 */
export function home()
{
	$('.home').jpreLoader({
		showSplash: false,
		autoClose: false,
		closeBtnText: "Experience Porsche",
	}, function onComplete() {	
		var home = document.querySelector('.home');
		if (home) { home.style.backgroundImage = "url(../img/bg.jpg) " }
	});

	$('.home').SmoothScroll();
	
	$('.home').Audio();
	$('.home').Car();
	$('.home').DataOffset();
	$('.home').MissionE();
	$('.home').SlideIn();
	
}

export function models()
{
	$('.models').ImgSequence();
	$('.models').SlickFunc();
}



/*
 * Load functions on $(document).ready()
 * recall in page-transition after animation
 */
$(function(){
	if ( $('.home').length) 	{ home(); 	}
	if ( $('.models').length) 	{ models(); }
})




/*
 *
 * IMPORT JS FILES
 *
 */

require('./page-transition');


// Libraries
require('./lib/jquery.easing');
require('./lib/universal-parallax');
require('./lib/smoothState');

// NPM Libraries
require('slick-carousel');


// Components
require('./components/refresh');
require('./components/smooth-scroll');

require('./components/home/audio');
require('./components/home/car');
require('./components/home/data-offset');
require('./components/home/mission-e');
require('./components/home/slide-in');

require('./components/models/img-sequence');
require('./components/models/slick');