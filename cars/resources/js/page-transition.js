/*
 * https://github.com/miguel-perez/smoothState.js
 *
 * prefetch page on link hover
 * on click play animation
 * load content during logo
 * refresh page from cache to reset JS
 * 
 */

import * as app from './app';

$(function() {
	const slideOne  = document.querySelector('.page_transition .c1'),
		  slideTwo  = document.querySelector('.page_transition .c2'),
		  slideTest  = document.querySelector('.page_transition .c2 .test'),
		  slideLogo = document.querySelector('.page_transition .c2 .logo'),
		  duration = 1.1;

	let
	SlideIn = new TimelineMax({paused:true})
		.fromTo(slideOne , duration, {x: "-100%"},{x: "0%", ease: Power4.easeInOut} )
		.fromTo(slideTwo , duration, {x: "-100%"},{x: "0%", ease: Power4.easeInOut}, ("=-"+(duration - 0.2)) )
		.fromTo(slideLogo , duration, {x: "0"},{x: "-100%", ease: Power4.easeInOut}, ("=-"+duration) )
		.set(slideOne, {x: "100%"}),

	SlideOut = new TimelineMax({paused:true})
		.to(slideTwo , duration,  {x: "100%", ease: Power3.easeInOut} )
		.to(slideLogo , duration, {x: "-200%", ease: Power3.easeInOut }, ("=-"+duration)),

	options = {
		prefetch: true,
		cacheLength: 5,
		hrefRegex: '/', //required for smooth scroll on #ids

		// on link click
		// doesn't trigger on going a page back/forward
		onBefore: function($container, $currentTarget){
			
		},

		// ANIMATION exit
		onStart: {
			duration: (SlideIn.duration() * 1000 + 400), //400 for header transition
			render: function ($container) {
				$('.page_transition').css({display: 'block', zIndex: 500});
				SlideIn.play(0);
				setTimeout(function(){
					$('header').removeClass('show');
				}, (SlideIn.duration() * 1000));
			}
		},

		// Inject the new content
		onReady: {
			duration: (SlideOut.duration() * 1000),
			render: function ($container, $newContent) {
				$container.html($newContent);
				$('#content').removeClass('animate').css({opacity: 0});

				//if target is home page, use black bg
				if ($newContent.hasClass('home')) {
					document.body.style.backgroundColor = '#000';
				} else { //overwrite class 'dark'
					document.body.style.backgroundColor = '#FFF';
				}

				SlideOut.play(0);
			}
		},

		// re-initialize JS files
		onAfter: function($container, $newContent){
			//if ( $('.home').length) 		{ app.home(); 	}
			//if ( $('.models').length) 	{ app.models(); }
			location.reload(false);
		}
	},

	smoothState = $('#smoothState').smoothState(options).data('smoothState');
});
