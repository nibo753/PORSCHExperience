export function scrollTo(target, duration, easing, offset) {
	$('html,body').stop().animate({
		scrollTop: (target.offset().top - offset)
	}, duration, easing);
}

export function scrollStopEventlistener(){
    let page = $('html,body');
    page.on("scroll wheel mousedown DOMMouseScroll mousewheel keyup touchmove", function(){
       page.stop();
   });
}

export function audioFadeOut(element, duration) {
	const x = $(element);
	x.animate({volume: 0}, duration);
	setTimeout(function(){
		x.trigger('pause');
	}, duration);
}

export function audioFadeIn(element, volume, duration) {
	const x = $(element);
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


export function updateURLParameter(url, param, paramVal)
{
    var TheAnchor = null;
    var newAdditionalURL = "";
    var tempArray = url.split("?");
    var baseURL = tempArray[0];
    var additionalURL = tempArray[1];
    var temp = "";

    if (additionalURL) 
    {
        var tmpAnchor = additionalURL.split("#");
        var TheParams = tmpAnchor[0];
            TheAnchor = tmpAnchor[1];
        if(TheAnchor)
            additionalURL = TheParams;

        tempArray = additionalURL.split("&");

        for (var i=0; i<tempArray.length; i++)
        {
            if(tempArray[i].split('=')[0] != param)
            {
                newAdditionalURL += temp + tempArray[i];
                temp = "&";
            }
        }        
    }
    else
    {
        var tmpAnchor = baseURL.split("#");
        var TheParams = tmpAnchor[0];
            TheAnchor  = tmpAnchor[1];

        if(TheParams)
            baseURL = TheParams;
    }

    if(TheAnchor)
        paramVal += "#" + TheAnchor;

    var rows_txt = temp + "" + param + "=" + paramVal;
    return baseURL + "?" + newAdditionalURL + rows_txt;
}

export function removeURLParameter(sourceURL, key) {
    var rtn = sourceURL.split("?")[0],
        param,
        params_arr = [],
        queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
    if (queryString !== "") {
        params_arr = queryString.split("&");
        for (var i = params_arr.length - 1; i >= 0; i -= 1) {
            param = params_arr[i].split("=")[0];
            if (param === key) {
                params_arr.splice(i, 1);
            }
        }
        rtn = rtn + "?" + params_arr.join("&");
    }
    return rtn;
}