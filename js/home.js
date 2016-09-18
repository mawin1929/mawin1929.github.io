main();
slider();
disable();
fadein();
fancybox();
function disable() {
    $('img').live('contextmenu', function(e){
        return false;
    });
}
function fancybox(){
    $(document).ready(function() {
        $(".fancybox").fancybox();
    });
}


function fadein() {
    $(document).ready(function () {

        /* Every time the window is scrolled ... */
        $(window).scroll(function () {

            /* Check the location of each desired element */
            $('.fade').each(function (i) {

                var bottom_of_object = $(this).offset().top + $(this).outerHeight()-330;
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                /* If the object is completely visible in the window, fade it it */
                if (bottom_of_window > bottom_of_object) {

                    $(this).animate({'opacity': '1'}, 500);

                }

            });

        });

    });
}
function main() {
    $(document).ready(function () {
        var trigger = $('.hamburger'),
            overlay = $('.overlay'),
            isClosed = false;

        trigger.click(function () {
            hamburger_cross();
        });



        function hamburger_cross() {

            if (isClosed == true) {
                overlay.hide();
                trigger.removeClass('is-open');
                trigger.addClass('is-closed');
                isClosed = false;
            } else {
                overlay.show();
                trigger.removeClass('is-closed');
                trigger.addClass('is-open');
                isClosed = true;
            }
        }

        $('[data-toggle="offcanvas"]').click(function () {
            $('#wrapper').toggleClass('toggled');
        });
    });
}


function slider(){
    $(document).ready(function(){
    $("#slideshow > div:gt(0)").hide();

    setInterval(function() {
        $('#slideshow > div:first')
            .fadeOut(3000)
            .next()
            .fadeIn(3000)
            .end()
            .appendTo('#slideshow');
        },3000)
    });
}
