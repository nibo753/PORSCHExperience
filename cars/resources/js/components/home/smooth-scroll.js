import * as f from './../../functions';

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

    $('.home').removeClass('noscroll');
    f.scrollTo(target, 1500, 'easeInOutQuint', 0);
});