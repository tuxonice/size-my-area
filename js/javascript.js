
// jsPanel
var optionsPanel = $.jsPanel({
    position:    {my: "right-top", at: "right-top", offsetY: 15},
    theme:       "rebeccapurple",
    contentSize: {width: 300, height: 280},
    headerTitle: "Control panel",
    contentAjax: 'wcontent.html',
    callback: function () {
        this.content.css("padding", "8px");
    }
});


	var map;
	var cityCircle;
    var marker;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.1015, lng: -7.8313},
          zoom: 12,
          draggableCursor:'crosshair',
        });
        
        map.addListener('click', function(event) {
			var decLatitude = Number(event.latLng.lat());
			var decLongitude = Number(event.latLng.lng());
			var latitude = getDD2DMS(decLatitude,'lat');
			var longitude = getDD2DMS(decLongitude,'lon');
			$('#lat').html(latitude);
			$('#lng').html(longitude);
			map.panTo(new google.maps.LatLng(decLatitude, decLongitude));
			marker.setPosition(new google.maps.LatLng(decLatitude, decLongitude));
        });
        
        marker = new google.maps.Marker({
          position: {lat: 37.1015, lng: -7.8313},
          map: map,
          title: 'Hello World!'
        });
        
        cityCircle = new google.maps.Circle({
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35,
          map: map,
          center: {lat: 37.1015, lng: -7.8313},
          radius: 1784.57
        });
          
        decLatitude = Number(37.1015);
		decLongitude = Number(-7.8313);
		$('#lat').html(getDD2DMS(decLatitude,'lat'));
		$('#lng').html(getDD2DMS(decLongitude,'lon'));  
        $("#radius").html(1784.57);
        
      }
      
   function go(){
		var area = Number($("#value").val());
		var radius = Math.sqrt(area/3.14) * 1000;
		$("#radius").html(radius.toFixed(2));
		cityCircle.setRadius(radius);
		cityCircle.setCenter(marker.getPosition());
		cityCircle.setVisible(true);
	}
	  
	function del(){
		cityCircle.setVisible(false);
		  
	 }


	function getDD2DMS(dms, type){

    var sign = 1, Abs=0;
    var days, minutes, secounds, direction;

    if(dms < 0)  { sign = -1; }
    Abs = Math.abs( Math.round(dms * 1000000.));
    //Math.round is used to eliminate the small error caused by rounding in the computer:
    //e.g. 0.2 is not the same as 0.20000000000284
    //Error checks
    if(type == "lat" && Abs > (90 * 1000000)){
        //alert(" Degrees Latitude must be in the range of -90. to 90. ");
        return false;
    } else if(type == "lon" && Abs > (180 * 1000000)){
        //alert(" Degrees Longitude must be in the range of -180 to 180. ");
        return false;
    }

    days = Math.floor(Abs / 1000000);
    minutes = Math.floor(((Abs/1000000) - days) * 60);
    secounds = ( Math.floor((( ((Abs/1000000) - days) * 60) - minutes) * 100000) *60/100000 ).toFixed();
    days = days * sign;
    if(type == 'lat') direction = days<0 ? 'S' : 'N';
    if(type == 'lon') direction = days<0 ? 'W' : 'E';
    //else return value     
    return (days * sign) + 'º ' + minutes + "' " + secounds + "'' " + direction;
}

