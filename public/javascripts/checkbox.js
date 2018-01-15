$(function() {
    var $c = $('input[type="checkbox"]');

  $c.bind('change', function(){
      var add = '';
      $c.each(function(index, value) {
          if (this.checked){
              /*add += ($('span[for="' + this.value + '"]').html() + ', ');*/
              add += ($('span[for="' + this.value + '"]').html() + ' ');
          }
      });
      if (add.length > 0) {
          add = add.substring(0, add.length - 1) + ' ';
      }
      /*else if (add.length > 0) {
          add = 'チェックしたアイテム: ' + add.substring(0, add.length - 2) + '.';
      }*/
      else {
          /*add = 'まだチェックされてません';*/
          add = '';
      }
      /*$('#show1').html(add);*/
      $('input[name="tag"]').val(add);
  });

});
