const menu = document.getElementById( 'mp-menu' ),
hamburger  = document.getElementById( 'mp-trigger' );

let nav = new mlPushMenu( menu, hamburger, { type : 'cover'} );

export function _resetMenu() {
	nav._resetMenu();
}
export function _openMenu() {
	nav._openMenu();
}
export function _closeMenu() {
	nav._closeMenu();
}


let beginAC = 80,
	endAC 	= 320,
	beginB 	= 80,
	endB 	= 320,
	path1 	= document.getElementById('hamburger-path-1'),
	path2 	= document.getElementById('hamburger-path-2'),
	path3 	= document.getElementById('hamburger-path-3'),
	segment1 = new Segment(path1, beginAC, endAC),
	segment2 = new Segment(path2, beginB, endB),
	segment3 = new Segment(path3, beginAC, endAC),
	toCloseIcon = true,
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


hamburger.onclick = function() {
	animation();
	hamburger.classList.toggle('active');
};

export function animation(){
	hamburger.classList.add('scaled');

	if (toCloseIcon) {
		inAC(segment1);
		inB(segment2);
		inAC(segment3);
	} else {
		outAC(segment1);
		outB(segment2);
		outAC(segment3);
	}

	toCloseIcon = !toCloseIcon;

	setTimeout(function() {
		hamburger.classList.remove('scaled');
	}, 450);
}