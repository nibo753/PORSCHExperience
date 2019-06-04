export function scrollTo(target, duration) {
	$('html,body').stop().animate({
		scrollTop: target.offset().top
	}, duration, 'easeInOutQuint');
}

export function audioFadeOut(element, duration) {
	var x = $(element);
	x.animate({volume: 0}, duration);
	setTimeout(function(){
		x.trigger('pause');
	}, duration);
}

export function audioFadeIn(element, volume, duration) {
	var x = $(element);
	x.animate({volume: 0}, 0);
	x.animate({volume: volume}, duration);
}

export function isPlaying(audio) {
    return audio.currentAudio
        && audio.currentAudio.currentTime > 0
        && !audio.currentAudio.paused
        && !audio.currentAudio.ended
        && audio.currentAudio.readyState > 2;
}

export function thousandSeparator(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export function rnd(min, max) {
	return (Math.random() * (max - min) + min);
};