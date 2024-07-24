// declare variables
let mapOptions = {'centerLngLat': [-118.444,34.0709],'startingZoomLevel':10}

const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/streets-v2-light/style.json?key=wsyYBQjqRwKnNsZrtci1', // Your style URL
    center: mapOptions.centerLngLat, // Starting position [lng, lat]
    zoom: mapOptions.startingZoomLevel // Starting zoom level
});

function addMarker(data){
    let popup_message;
    let lng = data['lng'];
    let lat = data['lat'];
    if (data[' Do you like Matcha?'] == "Yes"){
        popup_message = `<h2>Matcha Lover! Favorite Matcha Place: ${data['Where is your favorite matcha place?']}</h3> <p>Zip Code: ${data['Where is your home zipcode?']}</p>`
    }
    else{
        popup_message = `<h2>Matcha Hater! Zip Code: ${data['Where is your home zipcode?']}</p>`
    }
    new maplibregl.Marker()
        .setLngLat([lng, lat])
        .setPopup(new maplibregl.Popup()
            .setHTML(popup_message))
        .addTo(map)
    createButtons(lat,lng,data['Where is your favorite matcha place?']);
}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button");
    newButton.id = "button"+title; 
    newButton.innerHTML = title;
    newButton.setAttribute("lat",lat);
    newButton.setAttribute("lng",lng);
    newButton.addEventListener('click', function(){
        map.flyTo({
            center: [lng,lat],
        })
    })
    document.getElementById("contents").appendChild(newButton);
}

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS-fC_e5FgSEI8JHv4Y9QkQXoTDu2iVMP7NEz_vFUZ72C3kS69DWil04z25MJmgBTBioNTy9Mr549Do/pub?output=csv"

// When the map is fully loaded, start adding GeoJSON data
map.on('load', function() {
    // Use PapaParse to fetch and parse the CSV data from a Google Forms spreadsheet URL
    Papa.parse(dataUrl, {
        download: true, // Tells PapaParse to fetch the CSV data from the URL
        header: true, // Assumes the first row of your CSV are column headers
        complete: function(results) {
            // Process the parsed data
            processData(results.data); // Use a new function to handle CSV data
        }
    });
});

function processData(results){
    console.log(results) //for debugging: this can help us see if the results are what we want
    results.forEach(feature => {
        //console.log(feature) // for debugging: are we seeing each feature correctly?
        // assumes your geojson has a "title" and "message" attribute
        // let coordinates = feature.geometry.coordinates;
        let longitude = feature['lng']
        let latitude = feature['lat'];
        let title = feature['Where did you get vaccinated?'];
        let message = feature['What zip code do you live in?'];
        addMarker(feature);
    });
};