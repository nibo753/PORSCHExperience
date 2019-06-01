window.w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
window.h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

/*
 * Libraries
 */

require('./bootstrap');
require('./lib/jpreloader');

	$('body.home').jpreLoader({
		showSplash: false,
		autoClose: false,
		closeBtnText: "Experience Porsche",
	}, function() {	
		//callback function
	});

require('./lib/jquery.easing');
require('./lib/universal-parallax');

/*
 * NPM Libraries
 */
 
require('slick-carousel');


/*
 *
 * Components
 *
 */

require('./components/refresh');
require('./components/scroll-smooth');

require('./components/home/audio');
require('./components/home/car');
require('./components/home/data-offset');
require('./components/home/mission-e');
require('./components/home/slide-in');

require('./components/models/slick');
