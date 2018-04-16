$(function() {
  var createObjectURL = (window.URL && window.URL.createObjectURL) ? function(file) {
      return window.URL.createObjectURL(file);
  } : (window.webkitURL && window.webkitURL.createObjectURL) ? function(file) {
      return window.webkitURL.createObjectURL(file);
  } : undefined;

  $('#profile_file').on('change', function(e) {
    var file = this.files[0];

    if (this.accept && $.inArray(file.type, this.accept.split(/, ?/)) == -1) {
      return alert('File type not allowed.');
    }

    if ((/^image\/(gif|png|jpeg)$/i).test(file.type)) {

      var reader = new FileReader(file);

      reader.readAsDataURL(file);
      var fname = file.name;
      var fsize = file.size;

      reader.onload = function(e) {
        var image = new Image();
        image.src = e.target.result;
        var url = createObjectURL
                ? createObjectURL(file)
                : e.target.result;

        if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
          $('.avatar-image').attr({
            'src' : url
          }).fadeIn(5000);
          $('.pro_pic_ch_btn').fadeIn(2000);
          $('.mask').css({'top' : '33%'});
        };
        /*if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
          $('#sm #image-placed').animate({opacity:1}, 1000);
          $('#sm .add').show();
          $('#sm .other-formdet').show();
        }*/

      };
    } else {
      var ext = file.name.split('.').pop();

      $('.pro_pic').html(ext);
    }
  });
});
