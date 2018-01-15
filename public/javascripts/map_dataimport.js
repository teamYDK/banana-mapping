var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: new google.maps.LatLng(2.8,-187.3),
    mapTypeId: 'terrain'
  });

  // Create a <script> tag and set the USGS URL as the source.
  var script = document.createElement('script');

  // <<外部スクリプトファイルのURLを指定>>
  script.src = 'URL';
    document.getElementsByTagName('head')[0].appendChild(script);
}

/*var feature = function() {
  <% for result in @messages : %>

    var username = <%= result.username %>;
    var latLng = {<%= result.lat %>, <%= result.lon %>} ;
    var title = <%= result.title %>;
    var comment = <%= result.comment %>;
    var picture = <%= result.file %>;
    var myMarker = new google.maps.Marker({
  position: latLng,
  map: map
<% end %>
    });
    attachMessage(myMarker);
}*/


// Loop through the results array and place a marker for each
// set of coordinates.
/*<リストの名前> = function() {
  for (var i = 0; i < "mapの名前".length; i++) {
      var username = "mapの名前"[i].username;
      var coords = "mapの名前"[i].geometry.coordinates;
      var latLng = new google.maps.LatLng(coords[1],coords[0]);
      var title = "mapの名前"[i].title;
      var comment = "mapの名前"[i].comment;
      var picture = "mapの名前"[i].comment;
      var myMarker = new google.maps.Marker({
	  position: latLng,
	  map: map
      });
      attachMessage(myMarker);
  }*/
