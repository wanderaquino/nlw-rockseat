const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

let mymap = L.map('mapid', options).setView([-27.222633, -49.6455874], 13);

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

const marker = L.marker([-27.222633, -49.6455874], {icon}).addTo(mymap).bindPopup().openPopup();

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