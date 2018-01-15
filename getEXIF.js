var ExifImage = require('exif').ExifImage;

var convert = function(dms){
  // var dms = [ 35, 40, 47.25 ];
  return dms[0] + ( dms[1] * 60 + dms[2] ) / 3600
}

try {
    new ExifImage({ image : 'test.jpg' }, function (error, image) {
        if (error)
            console.log('Error: '+error.message);
        else

            console.log(convert((image['gps']['GPSLatitude'])));
            console.log(convert((image['gps']['GPSLongitude'])));
    });
} catch (error) {
    console.log('Error: ' + error);
}
