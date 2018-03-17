$(function() {

  var createObjectURL = (window.URL && window.URL.createObjectURL) ? function(file) {
      return window.URL.createObjectURL(file);
  } : (window.webkitURL && window.webkitURL.createObjectURL) ? function(file) {
      return window.webkitURL.createObjectURL(file);
  } : undefined;

  $('#dropzone').on('dragover', function() {
    $(this).addClass('hover');
  });

  $('#dropzone').on('dragleave', function() {
    $(this).removeClass('hover');
  });

  $('#dropzone input').on('change', function(e) {
    var file = this.files[0];

    $('#dropzone').addClass('dropped');
    $('#dropzone').removeClass('hover');

    if (this.accept && $.inArray(file.type, this.accept.split(/, ?/)) == -1) {
      return alert('File type not allowed.');
    }

    $('.progress').toggleClass('complete');
    $('#dropzone img').remove();

    if ((/^image\/(gif|png|jpeg)$/i).test(file.type)) {

      var reader = new FileReader(file);

      reader.readAsDataURL(file);
      var fname = file.name;
      var fsize = file.size;
      var $result = $('#dropzone div');

      reader.onload = function(e) {
        var image = new Image();
        image.src = e.target.result;
        var url = createObjectURL
                ? createObjectURL(file)
                : e.target.result,

          $img = $('<div>').attr({
            'id' : 'effect'
          }).css({
            'background-image' : 'url(' + url + ')',
            'background-position' : '50% 50%'
          }).fadeIn();

          /*$img = $('<img>').on('load error', function() {
            $result.append(this);
          }).attr('src', url);*/

        image.onload = function() {
          var width = this.width;
          var height = this.height;
          var viewheight = 540 * height / width;
          $('#image-placehold').append($img);
          $('#image-placed').append('<p>' + 'Width : ' + width + '　Height : ' + height + '</p>');
          $('#image-placed').append('<p>' + 'FileName : ' + fname + '　FileSize : ' + fsize + 'bytes</p>');
          $('#image-placehold').css({
            'width' : '540px',
            'height' : viewheight
          });
          $('.drop-det').css({
            'width' : '540px',
            'height' : viewheight
          });
          $('#dropzone').css({'height' : viewheight});
        };

        $('#image-placed').delay(600).animate({opacity:1}, 1000);
        //$('#dropzone .image-placed').append($img);
        $('.add').show();
        $('.input-username').show();
        $('.input-title').show();
        $('.time-card-etc-commentbox').show();
        $('.input-tag').show();
        $('.button').show();


      };
    } else {
      var ext = file.name.split('.').pop();

      $('#dropzone div').html(ext);
    }
  });
});

/*$(function() {

  $('#container').on('dragover', function(e) {
    e.preventDefault();
    $(this).addClass('file-over');
    //$('svg path').show();
  });

  $('#container').on('dragleave', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).removeClass('file-over');
  });

  $('#container').on('drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).addClass('file-over').stop(true, true).css({
      background:'#fff'
    });
    $('.progress').toggleClass('complete');
    $('#image-holder').addClass('move');
  });

  var dropzone = document.getElementById("container");

  FileReaderJS.setupDrop(dropzone, {
    readAsDefault: "DataURL",
    on: {
      load: function(e, file) {
        var img = document.getElementById("image-holder");
        img.onload = function() {
          document.getElementById("image-holder").appendChild(img);
        };
        img.src = e.target.result;
      }
    }
  });

});*/
