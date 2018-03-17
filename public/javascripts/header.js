$(function() {
        var $header = $('#top-head');
        $(window).scroll(function() {
            if ($(window).scrollTop() > 50) {
                $header.addClass('fixed');
            } else {
                $header.removeClass('fixed');
            }
        });

        /*var fix = $('#pc-side-nav');
        var main = $('#page');
        $(window).scroll(function() {
          if ($(window).scrollTop() > 700) {
            fix.addClass('pc-side-nav-fixed');
            main.css({'top': '77px'});
          } else {
            fix.removeClass('pc-side-nav-fixed');
          }
        });*/
});
