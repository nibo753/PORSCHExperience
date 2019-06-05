$.fn.createSlideIn = function()
{
    const   contr = new ScrollMagic.Controller(),
            check = document.querySelector('.home');

    if ( check ) {
        // HEADER SLIDE IN
        new ScrollMagic.Scene({
            triggerElement: ".overview",
            offset: - + $('header').outerHeight(true),
            triggerHook: 0.9, //same as marginbot
        })
        .setClassToggle("header", "show")
        .addTo(contr);

        // SIDENAV SLIDE IN
        new ScrollMagic.Scene({
            triggerElement: ".overview",
            offset: - + $('header').outerHeight(true),
            triggerHook: 0.9,
        })
        .setClassToggle("#sideNav", "show")
        .addTo(contr);
    }
}