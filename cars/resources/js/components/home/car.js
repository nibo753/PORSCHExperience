$(function() {
    var controller = new ScrollMagic.Controller()
        check = document.querySelector('.overview');

    if ( check ) {
        // CONTENT FADE IN
        $('.overview section.car').each(function(){
            var id = '#' + this.id;

            // TITLE FADE
            var title = TweenMax.to(id + " .content .title", 0.4, {opacity: 1});
            new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.65,
                duration: "8%"
            })
            .setTween(title)
            .addTo(controller);

            // HR FADE
            var hr = TweenMax.to(id + " .content hr", 0.3, {opacity: 1});
            new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.35,
                duration: "8%"
            })
            .setTween(hr)
            .addTo(controller);

            // SVG FADE
            var svg_container = TweenMax.to(id + " .content .svg_container", 0.3, {opacity: 1}),
                fade_in_trigger = 0.25;
            new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: fade_in_trigger,
                duration: "8%"
            })
            .setTween(svg_container)
            .addTo(controller);

            // LINK FADE
            var link = TweenMax.to(id + " .content .model_link", 0.3, {opacity: 1});
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
                time    = rnd(1.4, 1.8),
                delay   = "-=" + (time/2),
                delaySVG= "-=" + time;


            

            /*
             * PRICE
             */
            if (price.length > 0) {
                var priceVal = price.attr('data').split('.').join("").split(',').join("."),
                    priceAnimate = { val: (parseFloat(priceVal) + 15000) },
                    strokeLength = ( (priceVal) /515 + ", 1000");

                nrTL.to(priceAnimate, time,
                    {
                        val: priceVal,
                        ease: Power1.easeOut,
                        onUpdate: function () {
                            price.html(thousandSeparator(priceAnimate.val.toFixed(0).split('.').join(", ")));
                        }
                    }, delay);

                nrTL.fromTo($(this).find('.price svg ellipse'), time,
                    {
                        strokeDasharray: "300, 1000"
                    },
                    {
                        strokeDasharray: strokeLength
                    },
                    delaySVG );
            }

            /*
             * SPEED
             */
            if (speed.length > 0) {
                var speedVal        = speed.attr('data'),
                    speedAnimate    = { val: 120 },
                    strokeLength    = ( (parseInt(speedVal) - 125 )/0.635 + ", 1000");

                nrTL.to(speedAnimate, time,
                    {
                        val: speedVal,
                        ease: Sine.easeOut,
                        onUpdate: function () {
                            speed.html(speedAnimate.val.toFixed(0));
                        }
                    },
                    delay);

                nrTL.fromTo($(this).find('.speed svg ellipse'), time,
                    {
                        strokeDasharray: "0, 1000"
                    },
                    {
                        strokeDasharray: strokeLength
                    },
                    delaySVG );
            }

            /*
             * ACCELERATION
             */
            if (acc.length > 0) {
                var accVal = acc.attr('data').split('.').join("").split(',').join("."),
                    accAnimate      = { val: 0 },
                    strokeLength    = ( (8.5 - accVal)/0.018 + ", 1000");

                nrTL.to(accAnimate, time,
                    {
                        val: accVal,
                        onUpdate: function () {
                            acc.html(accAnimate.val.toFixed(1).split('.').join(","));
                        }
                    },
                    delay);

                nrTL.fromTo($(this).find('.acc svg ellipse'), time, {strokeDasharray: "0, 1000"},{strokeDasharray: strokeLength}, delaySVG );
            }


            /*
             *
             * SCENE
             *
             */
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

function thousandSeparator(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function rnd(min, max) {
    return (Math.random() * (max - min) + min);
};