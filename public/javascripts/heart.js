/*$(function() {
  if ($('img').hasClass('test2')) {
    $("p#message").text("Vintage!!");
  } else if ($('img').hasClass('test3')) {
    $("p#message").text("GreyScale!!");
  }else{
    $("p#message").text("Nothing had Happened")
  }
})*/

$(function () {
  $('.add').on('click', function() {
    $('.main-container').show();
    $('.add').hide();
  });
})

$(document).ready(function(){
    console.debug("ready");
    var img_path =  $('img#effect').attr('src');
    //$("p#message2").html(img_path);
});

$('.content-body').imagesLoaded( { background: true }, function() {

  console.log('background image loaded');

  /*var img_path =  $('img#effect').attr('src');
  $("p#message2").html(img_path);*/

    $(".btn2").on('click', function(){

      console.log('Clicked');

              if ($(this).hasClass('test1')) {
                //$('img#effect').removeAttr("src").attr("src", img_path);
                $('img#effect').removeClass().addClass('test1');

                console.log('Entered of section test1');

                console.log('start simpleFilter fade');
                $('img.test1').simpleFilter({
                  filter : 'fade'
                });
                console.log('end simpleFilter fade');
                $("p#message").text("Fade!!");

              } else if ($(this).hasClass('test2')) {
                /*$('img#effect').removeAttr("src").attr("src", img_path);*/
                $('img#effect').removeClass().addClass('test2');

                console.log('Entered of section test2');

                console.log('start simpleFilter vintage');
                $('img.test2').simpleFilter({
                  filter : 'vintage'
                });
                console.log('end simpleFilter vintage');
                $("p#message").text("Vintage!!");

              } else if ($(this).hasClass('test3')) {
                $('img#effect').removeClass().addClass('test3');
                /*$('img#effect').removeAttr("src").attr("src", img_path);*/

                console.log('Entered of section test3');

                console.log('start simpleFilter grayscale');
                $('img.test3').simpleFilter({
                  filter : 'greyscale'
                });
                console.log('end simpleFilter grayscale');
                $("p#message").text("GreyScale!!");

              } else if ($(this).hasClass('test4')) {
                $('img#effect').removeClass().addClass('test4');
                /*$('img#effect').removeAttr("src").attr("src", img_path);*/

                console.log('Entered of section test4');

                console.log('start simpleFilter luxen');
                $('img.test4').simpleFilter({
                  filter : 'luxen'
                });
                console.log('end simpleFilter luxen');
                $("p#message").text("Luxen!!");

              } else if ($(this).hasClass('test5')) {
                $('img#effect').removeClass().addClass('test5');
                /*$('img#effect').removeAttr("src").attr("src", img_path);*/

                console.log('Entered of section test5');

                console.log('start simpleFilter subtle');
                $('img.test5').simpleFilter({
                  filter : 'subtle'
                });
                console.log('end simpleFilter subtle');
                $("p#message").text("Subtle!!");

              } else if ($(this).hasClass('test6')) {
                $('img#effect').removeClass().addClass('test6');
                /*$('img#effect').removeAttr("src").attr("src", img_path);*/

                console.log('Entered of section test6');

                console.log('start simpleFilter olive');
                $('img.test6').simpleFilter({
                  filter : 'olive'
                });
                console.log('end simpleFilter olive');
                $("p#message").text("Olive!!");

              } else if ($(this).hasClass('test7')) {
                $('img#effect').removeClass().addClass('test7');
                /*$('img#effect').removeAttr("src").attr("src", img_path);*/

                console.log('Entered of section test7');

                console.log('start simpleFilter beach');
                $('img.test7').simpleFilter({
                  filter : 'beach'
                });
                console.log('end simpleFilter beach');
                $("p#message").text("Beach!!");

              } else if ($(this).hasClass('test8')) {
                $('img#effect').removeClass().addClass('test8');
                /*$('img#effect').removeAttr("src").attr("src", img_path);*/

                console.log('Entered of section test8');

                console.log('start simpleFilter oldtimey');
                $('img.test8').simpleFilter({
                  filter : 'oldtimey'
                });
                console.log('end simpleFilter oldtimey');
                $("p#message").text("Oldtimey!!");

              } else if ($(this).hasClass('test9')) {
                $('img#effect').removeClass().addClass('test9');
                //$('img#effect').removeAttr("src").attr("src", img_path);

                console.log('Entered of section test9');

                console.log('start simpleFilter oldtimey');
                $('img.test9').simpleFilter({
                  lightleak : 'lightleak01'
                });
                console.log('end simpleFilter lightleak03');
                $("p#message").text("lightleak01!!");

              } else if ($(this).hasClass('test10')) {
                $('img#effect').removeClass().addClass('test10');
                //$('img#effect').removeAttr("src").attr("src", img_path);

                console.log('Entered of section test10');

                console.log('start simpleFilter lightleak02');
                $('img.test10').simpleFilter({
                  lightleak : 'lightleak02'
                });
                console.log('end simpleFilter lightleak02');
                $("p#message").text("lightleak02!!");

              } else if ($(this).hasClass('test11')) {
                $('img#effect').removeClass().addClass('test11');
                //$('img#effect').removeAttr("src").attr("src", img_path);

                console.log('Entered of section test11');

                console.log('start simpleFilter lightleak03');
                $('img.test11').simpleFilter({
                  lightleak : 'lightleak03'
                });
                console.log('end simpleFilter lightleak03');
                $("p#message").text("lightleak03!!");

              } else if ($(this).hasClass('test12')) {
                $('img#effect').removeClass().addClass('test12');
                //$('img#effect').removeAttr("src").attr("src", img_path);

                console.log('Entered of section test12');

                console.log('start simpleFilter vignette');
                $('img.test12').simpleFilter({
                  shadow : 'vignette'
                });
                console.log('end simpleFilter vignette');
                $("p#message").text("vignette!!");

              } else if ($(this).hasClass('test13')) {
                $('img#effect').removeClass().addClass('test13');
                //$('img#effect').removeAttr("src").attr("src", img_path);

                console.log('Entered of section test13');

                console.log('start simpleFilter oldtimey');
                $('img.test13').simpleFilter({
                  shadow : 'drama'
                });
                console.log('end simpleFilter drama');
                $("p#message").text("drama!!");

              } else{
                $("p#message").text("Nothing had Happened")
              }

  });

});
