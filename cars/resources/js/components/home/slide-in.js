import * as nav from './../nav'

$.fn.createSlideIn = function()
{
    const   contr = new ScrollMagic.Controller(),
            check = document.querySelector('.home');

    if ( check ) {
        const   el          = ".overview",
                navbar      = - + $('header').outerHeight(true),
                startAt     = 0.9, //same as marginbot
                navVar      = nav,
                hamburger   = document.getElementById( 'mp-trigger' );

        // HEADER SLIDE IN
        new ScrollMagic.Scene({
            triggerElement: el,
            offset: navbar,
            triggerHook: startAt
        })
        .setClassToggle("header", "show")
        .addTo(contr);

        // SIDENAV SLIDE IN
        new ScrollMagic.Scene({
            triggerElement: el,
            offset: navbar,
            triggerHook: startAt
        })
        .setClassToggle("#sideNav", "show")
        .addTo(contr);

        // resetNAV if scrolling up
        new ScrollMagic.Scene({
            triggerElement: el,
            offset: navbar,
            triggerHook: startAt
        })
        .addTo(contr)
        .on("start", function (e) {
            if (e.type == "start") {
                nav._resetMenu();

                if (hamburger.classList.contains('active')) {
                    nav.animation();
                    hamburger.classList.remove('active');
                }
            }
        });
    }
}