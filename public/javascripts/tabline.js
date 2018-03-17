$(document).on('mouseover','.tabFont_item',function(e){
		e.preventDefault();
		$('.tabFont_item').removeClass('active');
		$(this).addClass('active');
});

$(document).on('click','.tabLine_item',function(e){
		e.preventDefault();
    var index = $(this).attr('data-index');
    $('.tabLine .active').css('transform','translateX('+index*60+'px)');
});

$(document).on('mouseover','.tabBlock_item',function(e){
		e.preventDefault();
    var index = $(this).attr('data-index');
    $('.tabBlock .active').css('transform','translateX('+index*60+'px)');
});

$(document).on('mouseover','.tabBorder_item',function(e){
		e.preventDefault();
		$('.tabBorder_item').removeClass('active');
		$(this).addClass('active');
});

$(document).on('mouseover','.tabVertical_item',function(e){
		e.preventDefault();
		$('.tab_content').show();
		$('.tabVertical_item').removeClass('active');
		$(this).addClass('active');
});
$(document).on('mouseout','.tabVertical_item',function(e){
		e.preventDefault();
		$('.tab_content').hide();
		$('.tabVertical_item').removeClass('active');
});
