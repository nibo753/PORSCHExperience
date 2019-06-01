$(function() {
    var controller = new ScrollMagic.Controller()
        check = document.querySelector('.overview');

    if ( check ) {
        // CONTENT FADE IN
        $('.overview section.car').each(function(){
            var id = '#' + this.id;

            var title = TweenMax.to(id + " .content .title", 0.4, {opacity: 1, ease:Linear.easeNone});
            new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.65,
                duration: "8%"
            })
            .setTween(title)
            .addTo(controller);

            var hr = TweenMax.to(id + " .content hr", 0.3, {opacity: 1, ease:Linear.easeNone});
            new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.35,
                duration: "8%"
            })
            .setTween(hr)
            .addTo(controller);

            var svg_container = TweenMax.to(id + " .content .svg_container", 0.3, {opacity: 1, ease:Linear.easeNone}),
                fade_in_trigger = 0.25;
            new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: fade_in_trigger,
                duration: "8%"
            })
            .setTween(svg_container)
            .addTo(controller);

            var link = TweenMax.to(id + " .content .model_link", 0.3, {opacity: 1, ease:Linear.easeNone});
            new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.15
            })
            .setTween(link)
            .addTo(controller);


            /*
             * 
             * ANIMATE CAR NUMBERS
             * 
             */

            var nrTL    = new TimelineMax(),
                price   = $(this).find('.price .value'),
                pk      = $(this).find('.pk .value'),
                speed   = $(this).find('.speed .value'),
                acc     = $(this).find('.acc .value'),
                time    = rnd(1.4, 2),
                delay   = "-=0.8",
                delaySVG= "-=" + time;

            function updatePrice() {
                price.html(thousandSeparator(priceAnimate.val.toFixed(0).split('.').join(", "), '.'));
            }

            function updatePk() {
                pk.html(pkAnimate.val.toFixed(0));
            }

            function updateSpeed() {
                speed.html(speedAnimate.val.toFixed(0));
            }

            function updateAcceleration() {
                acc.html(accAnimate.val.toFixed(1).split('.').join(","));
            }

            //price
            if (price.length > 0) {
                var priceVal = price.attr('data').split('.').join("").split(',').join("."),
                    priceAnimate = { val: (parseFloat(priceVal) + 15000) };
                nrTL.to(priceAnimate, time, {val: priceVal, onUpdate:updatePrice, ease: Power1.easeOut}, delay);
                nrTL.fromTo($(this).find('.price svg ellipse'), time, {strokeDasharray: "350, 1000"},{strokeDasharray: "220, 1000"}, delaySVG );
            }

            //topspeed
            if (speed.length > 0) {
                var speedVal        = speed.attr('data'),
                    speedAnimate    = { val: 120 };
                    
                nrTL.to(speedAnimate, time, {val: speedVal, onUpdate:updateSpeed, ease: Sine.easeOut}, delay);
                nrTL.fromTo($(this).find('.speed svg ellipse'), time, {strokeDasharray: "0, 1000"},{strokeDasharray: "310, 1000"}, delaySVG );
            }

            //acceleration
            if (acc.length > 0) {
                var accVal = acc.attr('data').split('.').join("").split(',').join("."),
                    accAnimate = { val: 0 };
                nrTL.to(accAnimate, time, {val: accVal, onUpdate:updateAcceleration, ease:Linear.easeNone}, delay);
                nrTL.fromTo($(this).find('.acc svg ellipse'), time, {strokeDasharray: "0, 1000"},{strokeDasharray: "220, 1000"}, delaySVG );
            }

            //scene
            new ScrollMagic.Scene({
                triggerElement: id,
                triggerHook: fade_in_trigger,
                //reverse: false
            })
            .setTween(nrTL)
            .addTo(controller);
        });
    }
});

function thousandSeparator(x, separator) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

function rnd(min, max) {
    return (Math.random() * (max - min) + min);
};