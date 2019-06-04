$.fn.SlideIn = function()
{
    var c     = new ScrollMagic.Controller(),
        check = document.querySelector('.home');

    if ( check ) {
        // HEADER SLIDE IN
        new ScrollMagic.Scene({
            triggerElement: ".overview",
            offset: - + $('header').outerHeight(true),
            triggerHook: 0.9, //same as marginbot
        })
        .setClassToggle("header", "visible")
        .addTo(c);

        // SIDENAV SLIDE IN
        new ScrollMagic.Scene({
            triggerElement: ".overview",
            offset: - + $('header').outerHeight(true),
            triggerHook: 0.9,
        })
        .setClassToggle("#sideNav", "visible")
        .addTo(c);
    }
}