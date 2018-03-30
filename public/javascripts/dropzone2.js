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

    if (this.accept && $.inArray(file.type, this.accept.split(/, ?/)) == -1) {
      return alert('File type not allowed.');
    }

    if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
      $('#dropzone').addClass('dropped');
      $('#dropzone').removeClass('hover');
      $('.progress').toggleClass('complete');
      $('#dropzone img').remove();
    }

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

          $img = $('<img>').attr({
            'id' : 'effect',
            'src' : url
          }).css({
            //'background-image' : 'url(' + url + ')',
            //'background-position' : '50% 50%',
            'object-fit' : 'cover'
          }).fadeIn();

        image.onload = function() {
          var width = this.width;
          var height = this.height;
          var viewheight = 540 * height / width;
          var viewheightsm = 365 * height / width;

            if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
              $('#pc #image-placehold').append($img);
              $('#pc #image-placed').append('<p>' + 'Width : ' + width + '　Height : ' + height + '</p>');
              $('#pc #image-placed').append('<p>' + 'FileName : ' + fname + '　FileSize : ' + fsize + 'bytes</p>');
              $('#pc #image-placehold').css({
                'width' : '540px',
                'height' : viewheight
              });
              $('#pc .drop-det').css({
                'width' : '540px',
                'height' : viewheight
              });
              $('#pc #dropzone').css({
                'width' : '540px',
                'height' : viewheight
              });
            }
            if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
              $('#sm #image-placehold').append($img);
              $('#sm #image-placed').append('<p>' + 'Width : ' + width + '　Height : ' + height + '</p>');
              $('#sm #image-placed').append('<p>' + 'FileName : ' + fname + '　FileSize : ' + fsize + 'bytes</p>');
              $('#sm #image-placehold').css({
                'width' : '375px',
                'height' : '375px'
              });
              $('#sm .drop-det').css({
                'width' : '375px',
                'height' : '375px'
              });
              $('#sm #dropzone').css({
                'background' : 'transparent',
                'width' : '100%',
                'height' : '375px',
                'margin' : '0px'
              });
            }
        };
        if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
          $('#pc #image-placed').delay(600).animate({opacity:1}, 1000);
          $('#pc .add').show();
          $('#pc .other-formdet').show();
        };
        if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
          $('#sm #image-placed').animate({opacity:1}, 1000);
          $('#sm .add').show();
          $('#sm .other-formdet').show();
        }

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
