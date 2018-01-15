$(function() {

  /*$('#link2').click(function() {
    $("#map img").attr("src", "./sample2.jpg");
  });*/

  /*$('#tabs21 ul li span').click(function() {
    var $thisImg = $(this).attr('src', './sample1.jpg');
    var $thisAlt = $(this).attr('alt');
    $('.mainImage img').attr({src:$thisImg,alt:$thisAlt});
  });*/

  var menuNmber = 0;
  var menuNmbrPre = 0;
  var bbox = 0;
  var ew = $('#cont').width() + 'px';
  var ew2 = 5000;
  var slideSpeed = 500;

  $('#tabs21 li').eq(0).addClass('on');
  $('#cont div').eq(0).removeClass('im');
  $('#cont div').eq(0).addClass('io');
  /*$('#cont div').eq(0).show().css('left', ew).animate( {left: '0px'}, slideSpeed);*/
  $('#cont div').eq(0).show()

  $("#tabs21 li a").click(function(){

      menuNmbr = $("#tabs21 li a").index(this);
      $('#tabs21 li').eq(menuNmbr).addClass('on');
      /*$('#cont div').eq(menuNmbr).show().css('left', ew).animate( {left: '0px'}, slideSpeed);*/
      $('#cont div').eq(menuNmbr).removeClass('im');
      $('#cont .io').eq(menuNmbr).show();
      console.log("aa");
      google.maps.event.trigger(map, 'resize');

          if (menuNmbr != bbox) {
            menuNmbrPre = bbox;
            bbox = menuNmbr;
            $('#tabs21 li').eq(menuNmbrPre).removeClass('on');
            $('#cont div').eq(menuNmbrPre).addClass('im');
            /*$('#cont div').eq(menuNmbrPre).animate( {left: '-' + ew}, slideSpeed);*/

          }

    });


});
