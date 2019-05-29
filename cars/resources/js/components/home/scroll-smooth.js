function scrollTo(target) {
    $('html,body').stop().animate({
        scrollTop: target.offset().top
    }, 1500, 'easeInOutQuint');
}

// SIDENAV SMOOTH SCROLL
$('#sideNav a[href^="#"], .home header a[href^="#"].logo').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        scrollTo(target);
    }
});


// START BUTTON SMOOTH SCROLL
$('.home .intro #start').click(function (e) {
    e.preventDefault();
    var target = $(this).attr('data-car');
    target = $('.car[data-car="' + target + '"]');
    scrollTo(target);
    $('.home .intro .parallax.light').addClass('on');
    $('body.home').removeClass('noscroll');
    $(".home #audio_motor").trigger("play"); // plays the audio
});


// START BUTTON HOVER
$('.home .intro #start').hover(
   function(){ $('.home .intro .parallax.light').addClass('show') },
   function(){ $('.home .intro .parallax.light').removeClass('show') }
)