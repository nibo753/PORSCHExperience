window.w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
window.h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

/*
 * Load jQuery and preLoader
 */
require('./bootstrap');
require('./lib/jpreloader');

$('.home').jpreLoader({
	showSplash: false,
	autoClose: false,
	closeBtnText: "Experience Porsche",
}, function onComplete() {	
	var home = document.querySelector('.home');
	if (home) { home.style.backgroundImage = "url(../img/bg.jpg) " }
});


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
require('./lib/segment.min');
$('.home').createParallax();

// NPM Libraries
require('slick-carousel');


// Components
require('./components/nav');
require('./components/hamburger');
require('./components/page-transition');
require('./components/refresh');
require('./components/smooth-scroll');

require('./components/home/audio');
require('./components/home/car');
require('./components/home/data-offset');
require('./components/home/mission-e');
require('./components/home/slide-in');

require('./components/models/img-sequence');
require('./components/models/specs'); // apply JS before filter
require('./components/models/slick');