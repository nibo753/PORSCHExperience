import * as f from './../functions';

$.fn.SmoothScroll = function()
{   
    // #sideNav + home .logo
    $('#sideNav a[href^="#"], .home header a[href^="#"].logo').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            f.scrollTo(target, 1500);
        }
    });

    //home start button
    $('.home .intro #start').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('data-car');
        target = $('.car[data-car="' + target + '"]');

        f.scrollTo(target, 1500);
        $('.home').removeClass('noscroll');
    });
}