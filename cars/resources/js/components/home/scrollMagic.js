$(function() {
    var controller = new ScrollMagic.Controller(),
        w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
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
        $('.overview section.category').each(function(){
            var id = '#' + this.id;

            var title = TweenMax.to(id + " .content .title", 0.4, {opacity: 1, ease:Linear.easeNone});
            new ScrollMagic.Scene({
                triggerElement: id,
                duration: "15%"
            })
            .setTween(title)
            .addTo(controller);

            var hr = TweenMax.to(id + " .content hr", 0.4, {opacity: 1});
            new ScrollMagic.Scene({
                triggerElement: id,
                triggerHook: 0.35,
                duration: "10%"
            })
            .setTween(hr)
            .addTo(controller);

            var content_inner = TweenMax.to(id + " .content .content-inner", 0.4, {opacity: 1});
            new ScrollMagic.Scene({
                triggerElement: id,
                triggerHook: 0.20,
                duration: "15%"
            })
            .setTween(content_inner)
            .addTo(controller);
        });

        // SIDE NAV ANCHOR BG COLOR
        $('.overview #sideNav .list-group-item').each(function(){
            var anchor = TweenMax.fromTo(this, 0.4, {backgroundColor: '#f1f1f1', color: '#f1f1f1'}, {backgroundColor: '#000', color: '#000'});
            //from required to 'reset', otherwise stays .active/:hover color

            var y = $(this).position().top + $('#sideNav').position().top;

            new ScrollMagic.Scene({
                triggerElement: "#mission-e",
                triggerHook: y/h,
                offset: - $(this).outerHeight(true),
                duration: $(this).outerHeight(true)
            })
            .setTween(anchor)
            .addTo(controller);
        });
    }
});