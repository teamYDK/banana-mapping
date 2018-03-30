$(function() {
  $(window).load(function() {
    $('.hi-icon, .hi-icon2').delay(4000).fadeIn("slow");

  });

  /*$( ".input" ).focusin(function() {
    $( this ).find( "span" ).animate({"opacity":"0"}, 200);
  });

  $( ".input" ).focusout(function() {
    $( this ).find( "span" ).animate({"opacity":"1"}, 300);
  });

  $(".login").submit(function(){
    $(this).find(".submit i").removeAttr('class').addClass("fa fa-check").css({"color":"#fff"});
    $(".submit").css({"background":"#2ecc71", "border-color":"#2ecc71"});
    $(".feedback").show().animate({"opacity":"1", "bottom":"-80px"}, 400);
    $("input").css({"border-color":"#2ecc71"});
    return false;
  });*/

  $(document).ready(function() {
    $('.login').hide();
    $('.create').hide();

    $('.hi-icon2').click(function() {
      $('.demo').toggleClass('switch');
      if($('.demo').hasClass('switch')) {
        $('.login').delay(200).show("slow");
        $('.hi-icon, .hi-icon2').fadeOut();
      }else{
        $('.login').hide();
        $('.hi-icon, .hi-icon2').show();
      }
    });

    $('.hi-icon').click(function() {
      $('.demo').toggleClass('switch');
      if($('.demo').hasClass('switch')) {
        $('.create').delay(200).show("slow");
        $('.hi-icon, .hi-icon2').fadeOut();
      }else{
        $('.create').hide();
        $('.hi-icon, .hi-icon2').show();
      }
    });

    $('.create #fab').click(function() {
      if($('.demo').hasClass('switch')) {
        $('.create').delay(200).hide();
        $('.hi-icon, .hi-icon2').fadeIn();
        $('.demo').toggleClass('switch');
      }else{
        $('.create').show();
        $('.hi-icon, .hi-icon2').hide();
      }
    });

    $('.login #fab').click(function() {
      if($('.demo').hasClass('switch')) {
        $('.login').delay(200).hide();
        $('.hi-icon, .hi-icon2').fadeIn();
        $('.demo').toggleClass('switch');
      }else{
        $('.login').show();
        $('.hi-icon, .hi-icon2').hide();
      }
    });

  });

});
