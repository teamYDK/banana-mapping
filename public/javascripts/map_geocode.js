function initGeoComplete(){

  var myLatlng = new google.maps.LatLng(35.681, 139.767);

  // Map
  var map = new google.maps.Map(document.getElementById('map'));

  // インスタンス[geocoder]作成
    var geocoder = new google.maps.Geocoder();
    var input1 = '35.71879444444444,139.73097222222222'
    var input2 = '35.71950277777778,139.73411666666667'
    var input3 = '48.865519444444445,2.3344972222222222'
    var input = '35.69005556,139.7059944'
    var input5 = '43.946358333333336,141.62945555555555'
    var latlngStr = input.split(',', 2);
    var latlng_geo = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
    var service = new google.maps.places.PlacesService(map);

    /*var address = 'お茶の水女子大学'
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            var address_geo = results[0].geometry.location;

            console.log(address_geo);

          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });*/

    geocoder.geocode({
        'location': latlng_geo     // 起点のキーワード
    }, function(result, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            // 中心点を指定
            var latlng_geo2 = result;
            var latlng_geo3 = result[0].address_components;
            var latlng_geo4 = result[0].formatted_address;
            var latlng_id = result[0].place_id;
            var latlng_bound = result[0].geometry.bounds;

            console.log(latlng_geo2);
            //console.log(latlng_geo3);
            //console.log(latlng_geo4);

            service.nearbySearch({
              'location' : latlng_geo,
              //'bounds' : latlng_bound,
              'rankBy': google.maps.places.RankBy.DISTANCE,
              //'radius' : '100',
              'type' : 'point_of_interest'
            }, function(results2, status2, pagination) {
              if (status == google.maps.places.PlacesServiceStatus.OK) {
                var place_res = results2;
                console.log(place_res);

                if (pagination.hasNextPage) {
                  pagination.nextPage();
                }
              } else {
                console.log('error');
              }
            });

            service.getDetails({
                  placeId: latlng_id,
                }, function(place, status) {
                  if (status === google.maps.places.PlacesServiceStatus.OK) {
                    var place_det = place;
                    console.log(place_det);
                  } else {
                    console.log("error");
                  }
                });

        } else {
            alert('取得できませんでした…');
        }
    });

  //google.maps.event.addDomListener(window, 'load', initgeolocate);
};
