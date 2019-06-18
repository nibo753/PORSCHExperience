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
    return audio
        && audio.currentTime > 0
        && !audio.paused
        && !audio.ended
        && audio.readyState > 2;
}

export function thousandSeparator(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export function rnd(min, max) {
	return (Math.random() * (max - min) + min);
};


export function updateURLParameter(param, paramVal)
{
    let url             = window.location,
    TheAnchor           = null,
    newAdditionalURL    = "",
    tempArray           = url.href.split("?"),
    baseURL             = tempArray[0],
    additionalURL       = tempArray[1],
    temp                = "";

    if (additionalURL) 
    {
        let tmpAnchor = additionalURL.split("#"),
            TheParams = tmpAnchor[0];
            TheAnchor = tmpAnchor[1];
        if(TheAnchor)
            additionalURL = TheParams;

        tempArray = additionalURL.split("&");

        for (let i=0; i<tempArray.length; i++)
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
        let tmpAnchor = baseURL.split("#"),
            TheParams = tmpAnchor[0];
            TheAnchor = tmpAnchor[1];

        if(TheParams)
            baseURL = TheParams;
    }

    if(TheAnchor)
        paramVal += "#" + TheAnchor;

    let rows_txt = temp + "" + param + "=" + paramVal,
      updatedUrl = baseURL + "?" + newAdditionalURL + rows_txt;

    window.history.replaceState({'id': 'smoothState'}, url.pathname, updatedUrl);
}

export function removeURLParameter(key) {
    let url = window.location,
        rtn = url.href.split("?")[0],
        param,
        params_arr = [],
        queryString = (url.href.indexOf("?") !== -1) ? url.href.split("?")[1] : "";
    if (queryString !== "") {
        params_arr = queryString.split("&");
        for (let i = params_arr.length - 1; i >= 0; i -= 1) {
            param = params_arr[i].split("=")[0];
            if (param === key) {
                params_arr.splice(i, 1);
            }
        }
        rtn = rtn + "?" + params_arr.join("&");
    }
    window.history.replaceState({'id': 'smoothState'}, url.pathname, rtn);
}



export function simulate(element, eventName)
{
    let defaultOptions = {
        pointerX: 0,
        pointerY: 0,
        button: 0,
        ctrlKey: false,
        altKey: false,
        shiftKey: false,
        metaKey: false,
        bubbles: true,
        cancelable: true
    },
    eventMatchers = {
        'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
        'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
    },

    options = extend(defaultOptions, arguments[2] || {}),
    oEvent, eventType = null;

    for (let name in eventMatchers)
    {
        if (eventMatchers[name].test(eventName)) { eventType = name; break; }
    }

    if (!eventType)
        throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

    if (document.createEvent)
    {
        oEvent = document.createEvent(eventType);
        if (eventType == 'HTMLEvents')
        {
            oEvent.initEvent(eventName, options.bubbles, options.cancelable);
        }
        else
        {
            oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
            options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
            options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
        }
        element.dispatchEvent(oEvent);
    }
    else
    {
        options.clientX = options.pointerX;
        options.clientY = options.pointerY;
        let evt = document.createEventObject();
        oEvent = extend(evt, options);
        element.fireEvent('on' + eventName, oEvent);
    }
    return element;
}

// USED IN SIMULATE CLICK
function extend(destination, source) {
    for (let property in source)
      destination[property] = source[property];
    return destination;
}
