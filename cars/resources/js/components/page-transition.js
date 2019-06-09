/*
 * https://github.com/miguel-perez/smoothState.js
 *
 * prefetch page on link hover
 * on click play animation
 * load content during logo
 * refresh page from cache to reset JS
 * 
 */

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

SlideInDuration = (SlideIn.duration() * 1000 + 400), // 400 = header
SlideOutDuration = (SlideOut.duration() * 1000),

options = {
	prefetch: true,
	cacheLength: 6,
	hrefRegex: '/', //required for smooth scroll on #ids
	repeatDelay: SlideInDuration, //disable 2nd animation start

	// on link click
	// doesn't trigger on going a page back/forward
	onBefore: function($container, $currentTarget){
		
	},

	// ANIMATION exit
	onStart: {
		duration: SlideInDuration, 
		render: function ($container) {
			$('.page_transition').css({display: 'block', zIndex: 500});
			SlideIn.play(0);
			setTimeout(function(){
				$('header').removeClass('show');
			}, (SlideIn.duration() * 1000));
		}
	},

	// smoothState scrolls to top after onStart

	// Run if the page request is still pending and onStart has finished animating
	onProgress: {
		duration: 0,
		render: function ($container) {}
	},

	// Inject the new content
	onReady: {
		duration: SlideOutDuration,
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

	//smoothState scrolls to #hash after onReady

	// re-initialize JS files
	onAfter: function($container, $newContent){
		location.reload(false);
	}
},

smoothState = $('#smoothState').smoothState(options).data('smoothState');

export function clickAnchor(e){
	smoothState.clickAnchor(e);
}