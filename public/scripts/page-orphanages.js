let mymap = L.map('mapid').setView([-27.222633, -49.6455874], 13);

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
    }).addTo(mymap);

function addMarker({id,name,latitude,longitude}){

    const icon = L.icon({
        iconUrl: "/images/map-marker.svg",
        iconSize: [58,68],
        iconAnchor: [29,68],
        popupAnchor: [170,2]
    });
    
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        maxWidth: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}" class="choose-orphanage"> <img src="../images/arrow-white.svg"> </a>`);
    
    const marker = L.marker([latitude, longitude], {icon}).addTo(mymap).bindPopup(popup).openPopup();
    
}

const orphanagesSpan = document.querySelectorAll('.orphanages span');
console.log(orphanagesSpan);

orphanagesSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        latitude: span.dataset.lat,
        longitude: span.dataset.long
    }
    console.log(orphanage);
    addMarker(orphanage);
});