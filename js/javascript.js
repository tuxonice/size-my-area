
var circle;
var map;

$(function() {
    map = L.map('mapid').setView([37.1015, -7.8313], 12);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 15,
        id: 'mapbox/streets-v11',
        tileSize: 256,
        zoomOffset: 0
    }).addTo(map);

    jsPanel.create({
        position: {my: "right-top", at: "right-top", offsetY: 15, offsetX: -15},
        content: $("#samplecontent").html(),
        contentSize: {width: 300, height: 280},
        headerTitle: 'Control panel',
        theme: 'rebeccapurple',
        callback: function(panel) {
        $("#samplecontent").remove();
        }
    });

    circle = L.circle([37.1015, -7.8313], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 1784.58
    }).addTo(map);

    var latitude = getDD2DMS(37.1015,'lat');
    var longitude = getDD2DMS(-7.8313,'lon');
    $('#lat').html(latitude);
    $('#lng').html(longitude);
    var radius = Math.sqrt(10/3.14) * 1000;
    $("#radius").html(radius.toFixed(2));

    map.on('click', function (e) {
        var decLatitude = Number(e.latlng.lat);
        var decLongitude = Number(e.latlng.lng);
        var latitude = getDD2DMS(decLatitude,'lat');
        var longitude = getDD2DMS(decLongitude,'lon');
        $('#lat').html(latitude);
        $('#lng').html(longitude);
        circle.addTo(map);
        map.panTo(e.latlng);
        circle.setLatLng(e.latlng);
    });
});
    
      
   function go() {
        var area = Number($("#value").val());
        var unit = $("#unit").val();
        area = convertUnit(unit, area);
        var radius = Math.sqrt(area/3.14) * 1000;
        
        $("#radius").html(radius.toFixed(2));
        circle.addTo(map);
        circle.setRadius(radius);
    }
    
    function convertUnit(unit, area) {
        
        switch(unit){
            case 'ha':
                area = area * 0.01;
                break;
            case 'fbf':
                area = area * 0.00714;
                break;
        }
        
        return area;
    }
    
      
    function del() {
        map.removeLayer(circle);
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

