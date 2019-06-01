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
                duration: "10%"
            })
            .setTween(title)
            .addTo(controller);

            var hr = TweenMax.to(id + " .content hr", 0.4, {opacity: 1});
            new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.4,
                duration: "10%"
            })
            .setTween(hr)
            .addTo(controller);

            var content_inner = TweenMax.to(id + " .content .content-inner", 0.4, {opacity: 1}),
                fade_in_trigger = 0.25;
            new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: fade_in_trigger,
                duration: "10%"
            })
            .setTween(content_inner)
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
                acc     = $(this).find('.acc .value');

            function updatePrice() {
                price.html(thousandSeparator(priceAnimate.val.toFixed(2).split('.').join(", "), '.'));
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
                    priceAnimate = { val: (parseFloat(priceVal) + 30000) };
                nrTL.to(priceAnimate, rnd(1.6, 2), {val: priceVal, onUpdate:updatePrice, ease: Expo.easeOut}, 0);
            }

            //pk
            if (pk.length > 0) {
                var pkVal = pk.attr('data'),
                    pkAnimate = { val: 150 };
                nrTL.to(pkAnimate, rnd(1.2, 1.6), {val: pkVal, onUpdate:updatePk, ease: Sine.easeOut}, 0);
            }

            //topspeed
            if (speed.length > 0) {
                var speedVal = speed.attr('data'),
                    speedAnimate = { val: 120 };
                nrTL.to(speedAnimate, rnd(1.2, 1.6), {val: speedVal, onUpdate:updateSpeed, ease: Sine.easeOut}, 0);
            }

            //acceleration
            if (acc.length > 0) {
                var accVal = acc.attr('data').split('.').join("").split(',').join("."),
                    accAnimate = { val: 0 };
                nrTL.to(accAnimate, accVal, {val: accVal, onUpdate:updateAcceleration, ease:Linear.easeNone}, 0);
            }            

            //scene
            new ScrollMagic.Scene({
                triggerElement: id,
                triggerHook: fade_in_trigger,
                reverse: false
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