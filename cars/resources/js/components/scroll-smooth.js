function scrollTo(target, duration) {
    $('html,body').stop().animate({
        scrollTop: target.offset().top
    }, duration, 'easeInOutQuint');
}


/*
 * #sideNav
 * home .logo
 */

$('#sideNav a[href^="#"], .home header a[href^="#"].logo').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        scrollTo(target, 1500);
    }
});


/*
 * home start button
 */
$('.home .intro #start').click(function (e) {
    e.preventDefault();
    var target = $(this).attr('data-car');
    target = $('.car[data-car="' + target + '"]');

    scrollTo(target, 1500);
    $('body.home').removeClass('noscroll');
});