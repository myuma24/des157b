(function(){
    'use strict';

    // add your script here
    var map = L.map('map').setView([51.505, -0.09], 13);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([38.534550, -121.752060]).addTo(map);

    var circle = L.circle([38.534550, -121.752060], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);
    
    var polygon = L.polygon([
        [38.55, -121.75],
        [38.56, -121.7],
        [38.57, -121.80]
    ]).addTo(map);

    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    circle.bindPopup("I am a circle.");
    polygon.bindPopup("I am a polygon.");
}());