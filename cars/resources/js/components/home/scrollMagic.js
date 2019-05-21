$(function() {
    var controller = new ScrollMagic.Controller(),
        w   = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        h   = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
        tmp = document.querySelector('.overview');

    if ( tmp ) {
        // HEADER FADE IN
        new ScrollMagic.Scene({
            triggerElement: ".overview",
            offset: - + $('header').outerHeight(true)
        })
        .setClassToggle("header", "visible")
        .addTo(controller);

        // SIDENAV FADE IN
        new ScrollMagic.Scene({
            triggerElement: ".overview",
            offset: - + $('header').outerHeight(true)
        })
        .setClassToggle("#sideNav", "visible")
        .addTo(controller);


        // CAR CONTENT FADE IN
        $('.overview section.car').each(function(){
            var id = '#' + this.id;

            var title = TweenMax.to(id + " .content .title", 0.4, {opacity: 1, ease:Linear.easeNone});
            new ScrollMagic.Scene({
                triggerElement: id,
                duration: "10%"
            })
            .setTween(title)
            .addTo(controller);

            var hr = TweenMax.to(id + " .content hr", 0.4, {opacity: 1});
            new ScrollMagic.Scene({
                triggerElement: id,
                triggerHook: 0.4,
                duration: "10%"
            })
            .setTween(hr)
            .addTo(controller);

            var content_inner = TweenMax.to(id + " .content .content-inner", 0.4, {opacity: 1});
            new ScrollMagic.Scene({
                triggerElement: id,
                triggerHook: 0.25,
                duration: "10%"
            })
            .setTween(content_inner)
            .addTo(controller);
        });
    }
});