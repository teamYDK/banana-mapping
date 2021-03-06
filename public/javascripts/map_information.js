function initMap(){

  /*var myMarkers02 = [
    {
      position:[35.719804, 138.734385],
      title: 'A',
      content: 'COA'
    },
    {
      position:[35.71879444444444, 139.63097222222222],
      title: 'B',
      content: 'COB'
    },
    {
      position:[35.71879444444444, 139.73097222222222],
      title: 'C',
      content: 'COC'
    }
  ];*/

  function initialize() {

  var myLatlng = new google.maps.LatLng(35.681, 139.767);

  // Map Options
  var mapOptions = {
    center: myLatlng,
    zoom: 5,
    scrollwheel: false,
    styles: [

              {elementType: 'geometry', stylers: [{color: '#d3d6dd'}]},

              {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},

              {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},

              {

                  featureType: 'administrative',

                  elementType: 'geometry.stroke',

                  stylers: [{color: '#616266'}]

              },

              {

                  featureType: 'administrative.land_parcel',

                  elementType: 'geometry.stroke',

                  stylers: [{color: '#dcd2be'}]

              },

              {

                  featureType: 'administrative.land_parcel',

                  elementType: 'labels.text.fill',

                  stylers: [{color: '#31c9eb'}]

              },

              {

                  featureType: 'landscape.natural',

                  elementType: 'geometry',

                  stylers: [{color: '#d3d6dd'}]

              },

              {

                  featureType: 'poi',

                  elementType: 'geometry',

                  stylers: [{color: '#d3d6dd'}]

              },

              {

                  featureType: 'poi',

                  elementType: 'labels.text.fill',

                  stylers: [{color: '#cc7a9f'}]

              },

              {

                  featureType: 'poi.park',

                  elementType: 'geometry.fill',

                  stylers: [{color: '#d3d6dd'}]

              },

              {

                  featureType: 'poi.park',

                  elementType: 'labels.text.fill',

                  stylers: [{color: '#447530'}]

              },

              {

                  featureType: 'road',

                  elementType: 'geometry',

                  stylers: [{color: '#f5f1e6'}]

              },

              {

                  featureType: 'road.arterial',

                  elementType: 'geometry',

                  stylers: [{color: '#f5f1e6'}]

              },

              {

                  featureType: 'road.highway',

                  elementType: 'geometry',

                  stylers: [{color: '#f5f1e6'}]

              },

              {

                  featureType: 'road.highway',

                  elementType: 'geometry.stroke',

                  stylers: [{color: '#f5f1e6'}]

              },

              {

                  featureType: 'road.highway.controlled_access',

                  elementType: 'geometry',

                  stylers: [{color: '#f5f1e6'}]

              },

              {

                  featureType: 'road.highway.controlled_access',

                  elementType: 'geometry.stroke',

                  stylers: [{color: '#f5f1e6'}]

              },

              {

                  featureType: 'road.local',

                  elementType: 'labels.text.fill',

                  stylers: [{color: '#806b63'}]

              },

              {

                  featureType: 'transit.line',

                  elementType: 'geometry',

                  stylers: [{color: '#dfd2ae'}]

              },

              {

                  featureType: 'transit.line',

                  elementType: 'labels.text.fill',

                  stylers: [{color: '#8f7d77'}]

              },

              {

                  featureType: 'transit.line',

                  elementType: 'labels.text.stroke',

                  stylers: [{color: '#ebe3cd'}]

              },

              {

                  featureType: 'transit.station',

                  elementType: 'geometry',

                  stylers: [{color: '#dfd2ae'}]

              },

              {

                  featureType: 'water',

                  elementType: 'geometry.fill',

                  stylers: [{color: '#315fcc'}]

              },

              {

                  featureType: 'water',

                  elementType: 'labels.text.fill',

                  stylers: [{color: '#ffffff'}]

              }

          ]

  };

  // Map
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var infowindow;

  var showInfoWindow = function(markerObj) {
    if(infowindow) {
      infowindow.close();
    }

    if( $( "modal-overlay")[0]) return false;
    //marker Object から titleとcontentを取得して表示させる
    var contents = '<strong>' + markerObj.getTitle() + '</strong><br />'
      + '<img src="/uploads/' + markerObj.file + '" width="300">' + '<br />'
      + markerObj.comments;

    var contents02 = '<div id="modal-content" style="left: 427px; top: -3.5px; display: block;">' +
                        '<form id="detail">' +
                        '<p id="username">' + markerObj.usename + '</p>' + '<hr>' +
                        '<p id="comment">' + markerObj.comments + '</p>' + '<hr>' +
                        '</form>' +
                      '<img id=uploadimg src="' + markerObj.file + '">' +

                      '<p>' +
                        '<a id="modal-close" class="button-link">' +
                          '<p id="close">' + '閉じる' + '</p>' +
                        '</a>' +
                      '</p>' +

                     '</div>';

    $("body").append(contents02);
    $("body").append('<div id="modal-overlay"></div>');
    $("modal-overlay").fadeIn("slow");

    /*centeringModalSyncer();*/

    $("#modal-content").fadeIn("slow");

    $("modal-overlay,#modal-close").unbind().click( function() {

      $("#modal-content,#modal-overlay").fadeOut("slow", function(){

        $('#modal-overlay').remove();
      });
    });

    /*infowindow = new google.maps.InfoWindow({
      content: contents02
    });*/
    return infowindow.open(map, markerObj);
  };



  //var infowindow = new google.maps.InfoWindow({

      /*<ul>
        <% for item in @messages : %>
          <li><%= item.title %><br/><img src="/uploads/<%= item.file %>" width="300"></li>
        <% end %>
      </ul>*/

	//content: contentString
  //maxWidth: 200

  //'<div class="ex_2" style="left: 275.5px; top: 133.5px;">'+
  /* モーダルウインドウ */
    /*'<div id="modal-content">'+

      '<form id="detail">'+
        '<p id="username">UserName</p>'+
        '<hr>'+
        '<p id="comment">Comment</p>'+
        '<hr>'+
        '<p>Like　Comment</p>'+
        '<hr>'+
      '</form>'+

      '<img src="picture/Paris.JPG">'+

      '<p>'+
      '<a id="modal-close" class="button-link">'+
      '<p id="close">閉じる</p>'+
      '</a>'+
      '</p>'+*/

      /* モーダルウィンドウのコンテンツの終了 --> */
      /*'</div>'+

      '<p>'+
      '<a id="modal-open" class="button-link">クリックするとモーダルウィンドウが開きます。</a>'+
      '</p>'+*/
      /* ここまでモーダルウィンドウ */
      //'</div>'


    //});
    /*var mapLatLng = new google.maps.LatLng({lat: markerData[0]['lat'], lng: markerData[0]['lng']});*/

    for(var i=0, l=myMarkers.length; i<l; i+=1) {
      var markerData = myMarkers[i],
      marker = new mapIcons.Marker({
        position: new google.maps.LatLng( markerData.position[0], markerData.position[1] ),
        usename: markerData.username,
        title: markerData.title,
        comments: markerData.comment,
        file: markerData.file,
        map: map,
        icon: {
        		path: mapIcons.shapes.MAP_PIN,
        		fillColor: '#0b8793',
        		fillOpacity: 0.8,
        		strokeColor: '',
        		strokeWeight: 0
        	},
        map_icon_label: '<span class="map-icon map-icon-restaurant"></span>'
      });


    google.maps.event.addListener(marker, 'click', function(markerObj) {
      $(this).blur();  //ボタンをフォーカスから離す
      showInfoWindow(this);

    });

  }//end of for()

  // インスタンス[geocoder]作成
    var geocoder = new google.maps.Geocoder();
    var input1 = '35.71879444444444,139.73097222222222'
    var input2 = '35.71950277777778,139.73411666666667'
    var input3 = '48.865519444444445,2.3344972222222222'
    var input4 = '35.69005556,139.7059944'
    var input = '43.946358333333336,141.62945555555555'
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
            var latlng_geo2 = result[0];
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
                var place = results2;
                console.log(place);

                if (pagination.hasNextPage) {
                  pagination.nextPage();
                }
              } else {
                console.log('error');
              }
            });

            /*service.getDetails({
                  placeId: latlng_id,
                }, function(place, status) {
                  if (status === google.maps.places.PlacesServiceStatus.OK) {
                    var place_det = place;
                    console.log(place_det);
                  } else {
                    console.log("error");
                  }
                });*/

        } else {
            alert('取得できませんでした…');
        }
    });

} //end of initialize()

  google.maps.event.addDomListener(window, 'load', initialize);
};
