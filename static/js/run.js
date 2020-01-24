$(document).ready(function() {

    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 800) {
            $('.card-deck').fadeOut();
        } else {
            $('.card-deck').fadeIn();
        }
    });

});