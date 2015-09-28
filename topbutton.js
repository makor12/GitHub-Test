$(document).ready(function () {
    // Show or hide button.
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $(".go_top").fadeIn(500);
        } else { 
            $(".go_top").fadeOut(500);
        }
    });
            
            // Scroll animation to top of page
    $(".go_top").click(function (event) {
        event.preventDefault();
                
        $("html, body").animate({scrollTop: 0}, 400)
    })
});