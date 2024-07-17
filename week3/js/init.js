// declare variables
let mapOptions = {'centerLngLat': [-118.444,34.0709],'startingZoomLevel':5}

const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/streets-v2-light/style.json?key=wsyYBQjqRwKnNsZrtci1', // Your style URL
    center: mapOptions.centerLngLat, // Starting position [lng, lat]
    zoom: 10 // Starting zoom level
});

function addMarker(lat,lng,title,message){
    let popup_message = `<h2>${title}</h2> <h3>${message}</h3>`
    new maplibregl.Marker()
        .setLngLat([lng, lat])
        .setPopup(new maplibregl.Popup()
            .setHTML(popup_message))
        .addTo(map)
    createButtons(lat,lng,title);
    return message
}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); // (1)! 
    newButton.id = "button"+title; // (2)! 
    newButton.innerHTML = title; // (3)! 
    newButton.setAttribute("lat",lat); // (4)! 
    newButton.setAttribute("lng",lng); // (5)! 
    newButton.addEventListener('click', function(){
        map.flyTo({
            center: [lng,lat], //(6)!
        })
    })
    document.getElementById("contents").appendChild(newButton); //(7)! 
}


map.on('load', function(){
    fetch("map.geojson")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            processData(data); // Call processData with the fetched data

        });
});

function processData(data) {
    console.log(data);
    console.log(data.type);
    console.log(data.features);
    data.features.forEach(
       trail => {
        let longitude = trail.geometry.coordinates[0]
        let latitude = trail.geometry.coordinates[1]
        let msg = "color:"+trail.properties.color 

        let placename = trail.properties.place
        console.log(placename)

        addMarker(
            latitude,longitude,placename,msg
        )
       }
    )      
}