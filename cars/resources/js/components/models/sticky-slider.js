import * as f from './../../functions';

const 	c	= new ScrollMagic.Controller(),
		nav = document.querySelector('.models #model_nav');

if ( nav ) {
	let navOffset = - + $('header').outerHeight(true) + $('.models #model_nav').outerHeight(true),
		allowedToShow = false,

		scene = new ScrollMagic.Scene({
		triggerElement: nav,
		triggerHook: 0,
		offset: navOffset
	})
	.setPin(nav, {pushFollowers: false})
	.addTo(c)
	.on("enter leave", function (e) {
		if (e.type == "enter") {
			allowedToShow = true;
		}
		else {
			allowedToShow = false;
		}
	})
	.on("update", function (e) {
		if (allowedToShow && e.target.controller().info("scrollDirection") == 'REVERSE') {
				nav.classList.add('show');
		}
		else {
			nav.classList.remove('show');
		}
	});
}

