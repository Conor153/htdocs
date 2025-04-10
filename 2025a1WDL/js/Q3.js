$("document").ready(function(){

    var map = L.map("map").setView([54.786448, -8.055765], 8);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var greeenIcon = L.icon({
        iconUrl: 'icons/green.png',
        iconSize:     [32, 32], // size of the icon
        iconAnchor:   [16, 16], // where point in icon = marker location
    });

    var yellowIcon = L.icon({
        iconUrl: 'icons/yellow.png',
        iconSize:     [32, 32], // size of the icon
        iconAnchor:   [16, 16], // where point in icon = marker location
    });

    // add your code here

    $.getJSON(`http://localhost/2025a1wdl/json/sites.json`, function (data) {
        $.each(data.sites, function (i, item) 
        {
            
            marker = L.marker([item.lat,item.lng], {icon: greeenIcon }).addTo(map);

            // marker.on('click', function(e)
            // {
            //     alert(`${item.site_name}`)
            //     marker.bindPopup(`"<b>${item.site_name}</b>"`);
            // });
            marker.on('mouseover', function(e){
                L.marker([item.lat,item.lng], {icon: yellowIcon}).addTo(map).bindPopup(`<b>${item.site_name}</b>`);
                L.DomEvent.stopPropagation(e);  // NB
            });
    
            // marker.on('mouseout', function(e){
            //     L.marker([item.lat,item.lng], {icon: greeenIcon}).addTo(map);
            //     L.DomEvent.stopPropagation(e);  
            // });
        });
        
    
      });
});

