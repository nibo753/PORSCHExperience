const   controller  = new ScrollMagic.Controller(),
        check       = document.querySelector('.models');

if ( check ) {
    // CONTENT FADE IN
    $('.model_section .details .row').each(function(){
        let row_tween = TweenMax.fromTo(this, .5, {y: "10%", opacity: 0}, {y: "0%", opacity: 1, immediateRender: false})

        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.8,
            reverse: false
        })
        .setTween(row_tween)
        .addTo(controller);
    });
}