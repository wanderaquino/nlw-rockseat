let mymap = L.map('mapid').setView([-27.222633, -49.6455874], 13);

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
    }).addTo(mymap);

const icon = L.icon({
    iconUrl: "/public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
});

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    maxWidth: 240
}).setContent('Lar das Meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="../public/images/arrow-white.svg"> </a>');

const marker = L.marker([-27.222633, -49.6455874], {icon}).addTo(mymap).bindPopup(popup).openPopup();
