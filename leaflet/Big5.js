const latLong = [];
var name="";

$("document").ready(function (){

    var marker;
    var markerValue;
    
    for(var i=0; i<5; i++)
    {
        latLong.push($(`button:eq(${i})`).attr("value"))
    }

    latLong.forEach(function(item, index){
        item.split();
    });

    $("button").click(function (e){

        console.log($(this).parent().parent().children().first().text())
        name = $(this).parent().parent().children().first().text();
        const location = e.target.value.split(",")
        map.setView([location[0],location[1]], 16);
    });

    var map = L.map('map').setView([54.95212256082817,-7.7209027774341905], 16);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var stadiumIcon = L.icon({
        iconUrl: 'images/stadium.png',
        iconSize:     [32, 32], // size of the icon
        iconAnchor:   [16, 16], // where point in icon = marker location
    });


    for(var value of latLong)
    {
        markerValue = value.split(",");
        marker = L.marker([markerValue[0],markerValue[1]], {icon: stadiumIcon }).addTo(map);

        marker.on('click', function(e)
        {
            marker.bindPopup(name);
        });
        
        L.circle([markerValue[0], markerValue[1]], {
            color: 'blue',        
            fillOpacity: 0.25,
            radius: 200          
        }).addTo(map);
    }

    // marker.on('click', function(e)
    // {
    //     alert();
    //     marker.bindPopup($(`tr td:eq(0)`).text());
    // });

    // circle.on('click', function(e)
    // {
    //     // circle.bindPopup($(`tr td:eq(0)`).text());
    //     circle.bindPopup(???);
    // });

});