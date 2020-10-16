let mymap = L.map('mapid').setView([-27.222633, -49.6455874], 13);

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

//const marker = L.marker([-27.222633, -49.6455874], {icon}).addTo(mymap);

let marker;
mymap.on('click', (event) => {
    const lat = event.latlng.lat;
    const long = event.latlng.lng;

    marker && mymap.removeLayer(marker);
    marker = L.marker([lat,long], {icon}).addTo(mymap);
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=long]').value = long;
});


function uploadPhotos(){
    const container = document.querySelector("#images");

    const fieldsContainer = document.querySelectorAll(".new-upload");

    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

        if (newFieldContainer.children[0] == ""){
            return;
        }
        
        newFieldContainer.children[0].value  = "";
        container.appendChild(newFieldContainer);
}

function removePhotoField(event){
    const span = event.currentTarget;
    console.log(span);
    const fieldsContainer = document.querySelectorAll(".new-upload");
    console.log();
        if(fieldsContainer.length < 2){
            const input = document.querySelector('input[name="images"]');
            input.value="";
        } else {span.parentNode.remove();}
        
}

function toggleSelect(event){
    document.querySelectorAll('.button-select button').forEach((button) => {
        button.classList.remove('active');
    });
    // document.querySelectorAll('.button-select button').forEach(function(button) {
    //     button.classList.remove('active');
    // })

    const button = event.currentTarget;
    button.classList.add('active');
    const input = document.querySelector('[name="open_on_weekends"]');
    input.value = button.dataset.value;
}