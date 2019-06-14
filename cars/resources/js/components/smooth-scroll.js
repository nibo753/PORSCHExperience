import * as f from './../functions';
import * as imgSeq from './models/img-sequence';

f.scrollStopEventlistener();

// #sidenav + home logo
$('#sideNav a[href^="#"], .home a[href^="#intro"]').on('click', function(event) {
    let target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();

        f.scrollTo(target, 1500, 'easeInOutQuint', 0);
    }
});

//home start button
$('.home .intro #start').on('click', function (e) {
    e.preventDefault();
    let target = $(this).attr('data-car');
    target = $('.car[data-car="' + target + '"]');

    $('body').removeClass('noscroll');
    f.scrollTo(target, 1500, 'easeInOutQuint', 0);
});


// start exploring @ model page
// use scrollposition generated in img-sequence.js
//to create a constant speed regardless of when when scroll is trigger
$('#scroll_indicator a[href^="#"]').on('click', function(event) {
    event.preventDefault();

    if (!$(this).hasClass('disabled')) {
        let target = $(this.getAttribute('href'));
        if( target.length ) {
            if (!$('home, body').is(':animated')) {
                let height = $('.scrollmagic-pin-spacer').outerHeight(true),
                    offset = h - $('#model_nav').outerHeight(true),
                    duration = (1-imgSeq.scrollPosition)*height*1.8;
                f.scrollTo(target, duration, 'linear', offset );
            }
        }
    }
});