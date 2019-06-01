$(function(){
	var home = document.querySelector('.home .intro #start');
	if (home) {
		// AUDIO
		var motorIsOn = false,
			drivenOff = false,
			musicVol = 0.5,
			muteTime = 1200,
			music 				= new Audio('sounds/music.mp3'),
			audio_start_motor 	= new Audio('sounds/start_motor.mp3'),
			audio_gas_pedal 	= new Audio('sounds/gas_pedal.mp3'),
			audio_drive_off 	= new Audio('sounds/drive_off.mp3');

	 	music.volume = musicVol;
		music.loop = true;
		//music.play();

		// START BUTTON CLICK
		$('.home .intro #start').click(function (e) {
			e.preventDefault();

			if (!drivenOff) {
				$('.home .intro .parallax.light').addClass('on');
				$('.home .intro .audio').removeClass('active');
				$('.home .intro .audio').addClass('disabled');

				$(music).animate({volume: 0}, 3000);
				setTimeout(function(){ music.pause() }, 3000);

				audio_drive_off.play();
				audioFadeOut(audio_start_motor, 300);
				audioFadeOut(audio_gas_pedal, 300);

				drivenOff = true;
			}
		});

		// START BUTTON HOVER
		$('.home .intro #start').hover(
			// onMouseEnter
			function(){
				$('.home .intro .parallax.light').addClass('show');

				if (!motorIsOn && !drivenOff) {
					audio_start_motor.play();
				}
				else if(!drivenOff) {
					audioFadeOut(audio_start_motor, 300);
					audio_gas_pedal.play();
				}
				motorIsOn = true;
			},// onMouseLeave
			function(){
				$('.home .intro .parallax.light').removeClass('show');
			}
		);

		// AUDIO BUTTON CLICK
		$('.home .intro .audio').click(function (e) {
			if (!drivenOff) {
				$(this).toggleClass('active');

				if ( $(this).hasClass('active') ){
					music.play();
					audioFadeIn(music, musicVol, muteTime);
					audioFadeIn(audio_start_motor, 1, muteTime);
					audioFadeIn(audio_gas_pedal, 1, muteTime);
					audioFadeIn(audio_drive_off, 1, muteTime);
				}
				else {
					audioFadeOut(music, muteTime);
					audioFadeOut(audio_start_motor, muteTime);
					audioFadeOut(audio_gas_pedal, muteTime);
					audioFadeOut(audio_drive_off, muteTime);
				}
			}
		});
	}
});

function audioFadeOut(element, duration){
	var x = $(element);
	x.animate({volume: 0}, duration);
	setTimeout(function(){
		x.trigger('pause');
	}, duration);
}

function audioFadeIn(element, volume, duration){
	var x = $(element);
	x.animate({volume: 0}, 0);
	x.animate({volume: volume}, duration);
}