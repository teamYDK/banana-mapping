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
    else if( $( "#modal-overlay")[0]) {
      $("#modal-overlay").remove();
    }
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

    $("#map").append(contents02);
    $("#map").append('<div id="modal-overlay"></div>');
    $("#modal-overlay").fadeIn("slow");

    centeringModalSyncer();

    $("#modal-content").fadeIn("slow");

    $("#modal-overlay,#modal-close").unbind().click( function() {

      $("#modal-content,#modal-overlay").fadeOut("slow", function(){

        $("#modal-overlay,#modal-content").remove();
      });
    });

  };

  $( window ).resize( centeringModalSyncer ) ;

  //センタリングを実行する関数
  function centeringModalSyncer() {

    //画面(ウィンドウ)の幅、高さを取得
    var w = $( window ).width() ;
    var h = $( window ).height() ;

    var cw = $( "#modal-content" ).outerWidth();
    var ch = $( "#modal-content" ).outerHeight();

    //センタリングを実行する
    $( "#modal-content" ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;

  }

  /*var showTab = function(markerObj) {

    var tabheader = '<a href="#tabpage1" style="z-index:0">' + markerObj.tag + '</a>'

    $("#tabcontrol").append(tabheader);
  }*/

  for(var i=0, l=myMarkers.length; i<l; i+=1) {
      var markerData = myMarkers[i],
      marker = new google.maps.Marker({
        position: new google.maps.LatLng( markerData.position[0], markerData.position[1] ),
        usename: markerData.username,
        title: markerData.title,
        comments: markerData.comment,
        file: markerData.file,
        tag: markerData.tag,
        map: map
      });

    google.maps.event.addListener(marker, 'click', function() {
      $(this).blur();  //ボタンをフォーカスから離す
      showInfoWindow(this);
    });

  }


 }

  google.maps.event.addDomListener(window, 'load', initialize);
};
