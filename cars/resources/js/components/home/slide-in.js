import * as nav from './../nav';

const   contr = new ScrollMagic.Controller(),
        check = document.querySelector('.home');

if ( check ) {
    const   el          = ".overview",
            navbar      = - + $('header').outerHeight(true),
            startAt     = 0.9; //same as margin-bottom

    // HEADER SLIDE IN
    // reset NAV if scrolling up
    new ScrollMagic.Scene({
        triggerElement: el,
        offset: navbar,
        triggerHook: startAt
    })
    .setClassToggle("header", "show")
    .addTo(contr)
    .on("start", function (e) {
        if (e.type == "start") {
            nav._resetMenu();
        }
    });

    // SIDENAV SLIDE IN
    new ScrollMagic.Scene({
        triggerElement: el,
        offset: navbar,
        triggerHook: startAt
    })
    .setClassToggle("#sideNav", "show")
    .addTo(contr);   
}