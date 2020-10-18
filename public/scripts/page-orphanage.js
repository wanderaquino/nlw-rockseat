const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const lat = document.querySelector('span[data-latitude]');
const long = document.querySelector('span[data-longitude]');

let mymap = L.map('mapid', options).setView([lat.dataset.latitude, long.dataset.longitude], 13);

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
    }).addTo(mymap);

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
});

console.log(lat.dataset.latitude,long.dataset.longitude);

const marker = L.marker([lat.dataset.latitude, long.dataset.longitude], {icon}).addTo(mymap);

//Image gallery

function selectImage(event){
    const button = event.currentTarget;
    const  activeButtons = document.querySelectorAll('.images button');
    console.log(activeButtons);
    activeButtons.forEach((button) => {
        button.classList.remove('active');
    });
    const image = button.children[0];
    const imageContainer = document.querySelector('.orphanage-details > img');
    imageContainer.src = image.src; 

}