const 	c	= new ScrollMagic.Controller(),
		nav = document.querySelector('.models #model_nav');

if ( nav ) {
	let btnHeight = $('.model_filter').outerHeight(true) || 0,
		navOffset = - + $('header').outerHeight(true) + $('#model_nav').outerHeight(true) + btnHeight,
	allowedToShow = false;

	new ScrollMagic.Scene({
		triggerElement: nav,
		triggerHook: 0,
		offset: navOffset,
		duration: "80%"
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