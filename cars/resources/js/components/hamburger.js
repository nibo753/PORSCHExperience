import * as f from './../functions';

let hamburger  = document.getElementById( 'mp-trigger' ),
    beginAC = 80,
    endAC   = 320,
    beginB  = 80,
    endB    = 320,
    path1   = document.getElementById('hamburger-path-1'),
    path2   = document.getElementById('hamburger-path-2'),
    path3   = document.getElementById('hamburger-path-3'),
    segment1 = new Segment(path1, beginAC, endAC),
    segment2 = new Segment(path2, beginB, endB),
    segment3 = new Segment(path3, beginAC, endAC),
    duration = 0.1;

hamburger.classList.remove('hidden');

// draw(begin, end, duration, options)
// options {delay, easing, circular, callback}

// In animations (burger to cross)
function inAC(s) {
    s.draw('80% - 240', '80%', duration*3, {
        delay: 0.1,
        callback: function() {
            inAC2(s);
        }
    });
}

function inAC2(s) {
    s.draw('100% - 545', '100% - 305', duration, {
        easing: Elastic.easeOut.config(1, 0.3)
    });
}

function inB(s) {
    s.draw(beginB - 60, endB + 60, duration, {
        callback: function() {
            inB2(s)
        }
    });
}

function inB2(s) {
    s.draw(beginB + 120, endB - 120, duration*2, {
        easing: Bounce.easeOut
    });
}

// Out animations (cross to burger)
function outAC(s) {
    s.draw('90% - 240', '90%', duration, {
        easing: Elastic.easeIn.config(1, 0.3),
        callback: function() {
            outAC2(s)
        }
    });
}

function outAC2(s) {
    s.draw('20% - 240', '20%', duration*3, {
        callback: function() {
            outAC3(s)
        }
    });
}

function outAC3(s) {
    s.draw(beginAC, endAC, duration*1.5, {
        easing: Elastic.easeOut.config(1, 0.3)
    });
}

function outB(s) {
    s.draw(beginB, endB, duration*3, {
        delay: 0.1,
        easing: Elastic.easeOut.config(2, 0.4)
    });
}


/*
 * EVENTS
 */
let eventtype = f.mobilecheck() ? 'touchstart' : 'click';
$(hamburger).on(eventtype, function(e){
    animation();
})

function animation(){
    if ($('#content').hasClass('mp-active')) {
        inAC(segment1);
        inB(segment2);
        inAC(segment3);
        hamburger.classList.add('active');
    }
    else if(hamburger.classList.contains('active')){
        outAC(segment1);
        outB(segment2);
        outAC(segment3);
        hamburger.classList.remove('active');
    }
}


// ON CLASS CHANGE OF mp-active
let $div = $("#content"),
observer = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		if (mutation.attributeName === "class") {
			let attributeValue = $(mutation.target).prop(mutation.attributeName);
			if (!attributeValue.includes('mp-active')) {
				animation();
			}
		}
	});
});
observer.observe($div[0], {
	attributes: true
});