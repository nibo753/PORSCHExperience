$(function() {
    var controller = new ScrollMagic.Controller(),
        tmp = document.querySelector('#mission-e');

    if ( tmp ) {
        // BACKGROUND
        var bg = TweenMax.to("#mission-e .parallax", 0.2, {backgroundColor: '#000'});
        new ScrollMagic.Scene({
            triggerElement: "#mission-e",
            triggerHook: 0.8,
            duration: "5%"
        })
        .setTween(bg)
        .addTo(controller);
    }
});