$(function() {
    var c   = new ScrollMagic.Controller(),
        tmp = document.querySelector('.overview');

    if ( tmp ) {
        // HEADER SLIDE IN
        new ScrollMagic.Scene({
            triggerElement: ".overview",
            offset: - + $('header').outerHeight(true)
        })
        .setClassToggle("header", "visible")
        .addTo(c);

        // SIDENAV SLIDE IN
        new ScrollMagic.Scene({
            triggerElement: ".overview",
            offset: - + $('header').outerHeight(true)
        })
        .setClassToggle("#sideNav", "visible")
        .addTo(c);
    }
});