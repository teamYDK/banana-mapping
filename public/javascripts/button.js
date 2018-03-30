$(document).on('click', '.mark-comment', function(){
  var index = $('.mark-comment').index(this);
  console.log(index + 'th item clicked!');
  $('.time-card-etc-commentbox').eq(index).toggleClass('show');
});

$(document).on('click', '.mark-like', function(){
  var like_index = $('.mark-like').index(this);
  $('.heart').eq(like_index).toggleClass('love');
    $('.heart').eq(like_index).addClass("active").delay(300).queue(function(next){
      $('.heart').eq(like_index).removeClass("active");
      next();
    });
});
