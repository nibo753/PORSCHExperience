import * as f from './../../functions';

$.fn.createImgSequence = function()
{
	const 	c		= new ScrollMagic.Controller(),
			check 	= document.querySelector('.models #image_sequence');

	if ( check ) {
		let images 			= [],
			obj 			= {curImg: 0},
			sceneDuration 	= (imageSequenceCounter * 50),
			scrollPosition  = 0;

		// fill image array
		for ( let i = 1; i <= imageSequenceCounter; i++) {
			let img = "../img/" + imageSequenceModel + "/sequence/" + i + ".webp";
			images.push(img);
		}

		// ANIMATE IMG
		let imageTween = TweenMax.to(obj, 0.5,
			{
				curImg: images.length - 1,	// animate propery curImg to number of images
				roundProps: "curImg",	// round to integers so it can be used as an array index
				immediateRender: true,	// load first image automatically
				onUpdate: function () {
					$("#image_sequence img").attr("src", images[obj.curImg]);
				}
			}
		);

		new ScrollMagic.Scene({
			triggerElement: "#image_sequence",
			triggerHook: 0,
			duration: sceneDuration,
			offset: - + $('header').outerHeight(true),
		})
		.setTween(imageTween)
		.setPin('#image_sequence', {pushFollowers: true})
		.addTo(c)
		.on("progress", function (e) {
			scrollPosition = e.progress.toFixed(3);
		});



		// ANIMATE CONTENT INSIDE IMG
		let contentTimeline = new TimelineMax(),
			contentContainers = $('#image_sequence .content');

		for (let i = 1; i <= contentContainers.length; i++) {
			// SET DEFAULTS
			let yFadeIn = "-10%",
				yFadeOut = "-20%";

			// last element
			if (contentContainers.length == i) { yFadeIn = "0"; }

			// fade in if not first element
			if (i != 1) {
				contentTimeline.to(("#image_sequence .content.c" + [i]), 0.4,{ opacity: 1, y: yFadeIn }, "-=0.08");
			}

			//fade out if not last element
			if (contentContainers.length != i) {
				contentTimeline.to(("#image_sequence .content.c" + [i]), 0.4,{ opacity: 0, y: yFadeOut });
			}
		}

		new ScrollMagic.Scene({
			triggerElement: "#image_sequence",
			triggerHook: 0,
			duration: (sceneDuration*1.1),
			offset: - + $('header').outerHeight(true),
		})
		.setTween(contentTimeline)
		.addTo(c);



		// SCROLL INDICATOR
		f.scrollStopEventlistener();
		const page = $('home, body');

		$('#scroll_indicator a[href^="#"]').on('click', function(event) {
			let target = $(this.getAttribute('href'));
			if( target.length ) {
				event.preventDefault();
				if (!page.is(':animated')) {
					let height = $('.scrollmagic-pin-spacer').outerHeight(true),
						offset = h - $('#model_nav').outerHeight(true),
						duration = (1-scrollPosition)*height;
					f.scrollTo(target, duration, 'linear', offset );
				}
			}
		});
	}
}