window.w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
window.h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

/*
 * Load jQuery and preLoader
 */
require('./bootstrap');
require('./lib/jpreloader');

/*
 * Create export functions for page-transition.js
 * Required for files that use $(document).ready()
 * Only use the required JS for the page
 * 
 */

export let loaded_home       = false;
export let loaded_models     = false;

export function home()
{
	if (!loaded_home) {
		$('.home').jpreLoader({
			showSplash: false,
			autoClose: false,
			closeBtnText: "Experience Porsche",
		}, function onComplete() {	
			var home = document.querySelector('.home');
			if (home) { home.style.backgroundImage = "url(../img/bg.jpg) " }
		});

		
		$('.home').createSmoothScroll();
		
		$('.home').createAudio();
		$('.home').createCar();
		$('.home').createDataOffset();
		$('.home').createMissionE();
		$('.home').createSlideIn();

		loaded_home = true;
	}
}

export function models()
{
	if (!loaded_models) {
		$('.models').createImgSequence();
		$('.models').createSlick();

		loaded_models = true;
	}
}



/*
 *
 * IMPORT JS FILES
 *
 */

// Libraries
require('./lib/jquery.easing');
require('./lib/smooth-state');
require('./lib/universal-parallax');
require('./lib/multi-level-push-menu');

// NPM Libraries
require('slick-carousel');


// Components
require('./components/page-transition');
require('./components/refresh');
require('./components/smooth-scroll');

require('./components/home/audio');
require('./components/home/car');
require('./components/home/data-offset');
require('./components/home/mission-e');
require('./components/home/slide-in');

require('./components/models/img-sequence');
require('./components/models/slick');


/*
 * Load functions on $(document).ready()
 * callback in page-transition after animation
 */


$(function(){
	if ( $('.home').length) 	{ home(); 	}
	if ( $('.models').length) 	{ models(); }
})

$('.home').createParallax();

new mlPushMenu( document.getElementById( 'mp-menu' ), document.getElementById( 'mp-trigger' ), {
	type : 'cover' 		// cover or overlap
	//levelSpacing : 40 // space on overlap
} );