$(function() {
        var $header = $('#top-head');
        $(window).scroll(function() {
            if ($(window).scrollTop() > 50) {
                $header.addClass('fixed');
            } else {
                $header.removeClass('fixed');
            }
        });

});
