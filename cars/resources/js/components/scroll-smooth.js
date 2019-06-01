function scrollTo(target) {
    $('html,body').stop().animate({
        scrollTop: target.offset().top
    }, 1500, 'easeInOutQuint');
}

// SMOOTH SCROLL SIDENAV + LOGO
$('#sideNav a[href^="#"], .home header a[href^="#"].logo').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        scrollTo(target);
    }
});


// HOME START BUTTON SMOOTH SCROLL
$('.home .intro #start').click(function (e) {
    e.preventDefault();
    var target = $(this).attr('data-car');
    target = $('.car[data-car="' + target + '"]');

    scrollTo(target);
    $('body.home').removeClass('noscroll');
});