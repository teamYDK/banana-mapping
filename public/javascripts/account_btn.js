$(document).on('click', '.hide .profile_set', function(){
  $('.active-line').animate({top:'72px'});
  $('.account_box').hide();
  $('.profile_box').show();
  $('.prof').removeClass('hide');
  $('.acco').addClass('hide');
});

$(document).on('click', '.hide .account_set', function(){
  $('.active-line').animate({top:'0px'});
  $('.profile_box').hide();
  $('.account_box').show();
  $('.acco').removeClass('hide');
  $('.prof').addClass('hide');
});

$(document).on('click', '.edit_email_btn', function(){
  var elm = $('#current_email');
  var val = elm.val();
  $(this).hide();
  $('.edit_email').hide();
  $('.email_accord').fadeIn('slow');
  elm.val('');
  elm.focus();
  elm.val(val);
});

$(document).on('click', '#email_password_cancel', function(){
  $('.email_accord').hide();
  $('.edit_email_btn').fadeIn();
  $('.edit_email').fadeIn();
});

$(document).on('click', '.edit_password_btn', function(){
  //$('.active-line').animate({top:'0px'});
  $(this).hide();
  $('.edit_password').hide();
  $('.password_accord').fadeIn('slow');
  $('#current_password').focus();
});

$(document).on('click', '#password_cancel', function(){
  $('.password_accord').hide();
  $('.edit_password_btn').fadeIn();
  $('.edit_password').fadeIn();
});

$(document).on('click', '.edit_username_btn', function(){
  var elm = $('#current_username');
  var val = elm.val();
  $(this).hide();
  $('.edit_username').hide();
  $('.username_accord').fadeIn('slow');
  elm.val('');
  elm.focus();
  elm.val(val);
});

$(document).on('click', '#username_cancel', function(){
  $('.username_accord').hide();
  $('.edit_username_btn').fadeIn();
  $('.edit_username').fadeIn();
});
