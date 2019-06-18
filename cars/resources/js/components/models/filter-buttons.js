const check       = document.querySelector('.models .model_filter');

if ( check ) {
    // on hover remove active look on other filter buttons
    $('.model_filter .btn').hover(
        // onMouseEnter
        function(){
            $('.model_filter .btn').addClass('no_active');
            $(this).removeClass('no_active');
        },
        // onMouseLeave
        function(){
            $('.model_filter .btn').removeClass('no_active');
        }
    );
}