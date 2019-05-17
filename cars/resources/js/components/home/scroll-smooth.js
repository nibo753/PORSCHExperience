function scrollTo(target) {
    $('html,body').stop().animate({
        scrollTop: target.offset().top
    }, 1500, 'easeInOutQuint');
}

// START BUTTON SCROLL
$('.home #start').click(function (e) {
    e.preventDefault();
    var target = $(this).attr('data-car');
    target = $('.car[data-car="' + target + '"]');
    scrollTo(target);
    $('body').removeClass('noscroll');
    $("#audio_motor").trigger("play"); // plays the audio
});

// SIDENAV SCROLL
$('#sideNav a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        scrollTo(target);
    }
});