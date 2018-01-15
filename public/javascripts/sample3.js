
	function init(){
		var map_div = document.getElementById("gmap_canvas");
		var gmap_canvas = new google.maps.Map(map_div,{
			center: new google.maps.LatLng(34.839450, 134.693903),
			zoom : 14,
			mapTypeId : google.maps.MapTypeId.ROADMAP
		});

		//create contents
		var wrapper = document.createElement("div");
		wrapper.className = "gmapinfo";
		wrapper.id = "i_gmapinfo";

		var image = document.createElement("img");
		image.src = "http://castle-himeji.com/d1/wp-content/uploads/2015/05/eye_vs-kisai_gate.png";
		image.alt = "eye_vs-kisai_gate.png";

		var title = document.createElement("span");
		title.className = "title";
		var titlep = document.createElement("p");
		titlep.innerText = "世界文化遺産 国宝 姫路城";
		title.appendChild(titlep);

		var contentInner = document.createElement("span");
		contentInner.className = "contentinner";
		var contentInnerp = document.createElement("p");
		contentInnerp.innerText = "〒670-0012 兵庫県姫路市本町６８";
		contentInner.appendChild(contentInnerp);

		var link = document.createElement("a");
		link.appendChild(document.createTextNode("大入実況｜世界文化遺産国宝姫路城"));
		link.href = "http://www.himejicastle.jp/";
		link.target = "_blank";

		wrapper.appendChild(image);
		wrapper.appendChild(title);
		wrapper.appendChild(contentInner);
		wrapper.appendChild(link);


		//create infowindow
		var iw = new google.maps.InfoWindow({
			position: new google.maps.LatLng(34.839450, 134.693903),
			content: wrapper
		});

		//create marker
		var def_marker = create_marker({
			map: gmap_canvas,
			position: new google.maps.LatLng(34.839450, 134.693903)
		});

		//maker ivent
		google.maps.event.addDomListener(def_marker,"click", function(){
			iw.open(gmap_canvas);
		});

	}

	function create_marker(options){
		var m =  new google.maps.Marker(options);
		return m;
	}

	google.maps.event.addDomListener(window,"load",init);
	$('#ver').text(google.maps.version);
