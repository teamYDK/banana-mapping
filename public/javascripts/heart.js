$(function() {
  $(window).load(function() {
    /*var image = document.getElementById('background');
    image.crossOrigin = 'anonymous';*/

    $('img.filter1').simpleFilter({
	     filter : 'grayscale',
	     lightleak : 'lightleak01',
	     shadow : 'drama'
	  });

  });

});
