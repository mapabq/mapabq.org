var mymap = L.map('map', { scrollWheelZoom: false }).setView([35.1048139, -106.6509943], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYWJxIiwiYSI6ImNpeHRxc3Y1MjAwNTQycW56d3NsMmNwYXkifQ.S9tHYTJkndcIGC5RWh_7Hw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);

L.marker([35.1048139, -106.6509943])
    .addTo(mymap)
    .bindPopup("<b>Bow and Arrow Brewing Co.</b><br> 608 McKnight Ave NW,<br> Albuquerque, NM 87102");