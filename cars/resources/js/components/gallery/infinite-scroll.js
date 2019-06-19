const   controller  = new ScrollMagic.Controller(),
        check       = document.querySelector('.gallery');

if ( check ) {
    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: ".gallery_container #loader", triggerHook: "onEnter"})
    .addTo(controller)
    .on("enter", function (e) {
        if (!$("#loader").hasClass("active")) {
            $("#loader").addClass("active");
            // AJAX CALL
            addImgs(9);
        }
    });

    // AJAX CALL
    function addImgs (amount) {
        /*
        for (i=1; i<=amount; i++) {
            var randomColor = '#'+('00000'+(Math.random()*0xFFFFFF<<0).toString(16)).slice(-6);
            $("<div></div>")
                .addClass("col-12 col-md-6 col-lg-4")
                .css("background-color", randomColor)
                .appendTo(".gallery_container .row");
        }
        */

        axios.get('/gallery/newmedia')
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });


        // "loading" done -> revert to normal state
        scene.update(); // make sure the scene gets the new start position
        $("#loader").removeClass("active");
    }

    // add some boxes to start with.
    addImgs(21);
}