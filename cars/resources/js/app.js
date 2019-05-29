/*
 *
 * Libraries
 *
 */

require('./bootstrap');
require('./lib/jpreloader');

	$('body.home').jpreLoader({
		showSplash: false,
		autoClose: false,
		closeBtnText: "Experience Porsche",
	}, function() {	//callback function

	});

require('./lib/jquery.easing');
require('./lib/universal-parallax');


/*
 *
 * Components
 *
 */

require('./components/refresh');

require('./components/home/car');
require('./components/home/data-offset');
require('./components/home/mission-e');
require('./components/home/scroll-smooth');
require('./components/home/slide-in');
