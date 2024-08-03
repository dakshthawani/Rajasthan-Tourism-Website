$(document).ready(function() {
    $(".dropdown").hover(
        function() {
            $(this).find(".dropdown-menu").stop(true, true).slideDown("fast");
        },
        function() {
            $(this).find(".dropdown-menu").stop(true, true).slideUp("fast");
        }
    );
});

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) { // Change 50 to the scroll position at which the color should change
            $(".menu-bar").addClass('scrolled');
        } else {
            $(".menu-bar").removeClass('scrolled');
        }
    });
});

