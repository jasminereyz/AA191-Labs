// Initialize the map
const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/streets-v2-light/style.json?key=wsyYBQjqRwKnNsZrtci1', // Your style URL
    center: [-118.4430,34.0691], // Starting position [lng, lat]
    zoom: 10 // Starting zoom level
});
function createButtons(latitude,longitude,title){
    
    const newButton = document.createElement("button"); 
    newButton.id = "button"+title; 
    newButton.innerHTML = title; 
    newButton.setAttribute("lat",latitude); 
    newButton.setAttribute("lng",longitude); 
    newButton.addEventListener('click', function(){
        map.flyTo({
            center: [longitude,latitude], 
        })
    })
    document.getElementById("content").appendChild(newButton); 
}
function addMarker(latitude,longitude,title,message){
        new maplibregl.Marker()
            .setLngLat([longitude,latitude])
            .setPopup(new maplibregl.Popup()
                .setHTML(`<h2 id="popupTitle">${title}</h2><h3>${message}</h3>`)
                )
            .addTo(map)
        createButtons(latitude,longitude,title,message);
        
    return message
    
}

addMarker(34.09296,-118.28052, "Jellyman", "Childish Gambino's own cafe on Sunset")
addMarker(34.05725,-118.30716, "DAMO", "Ktown Gem")
addMarker(34.05287,-118.29713, "Memorylook", "Consistent and yummy")
addMarker(34.06242,-118.44763, "Junbi", "In Westwood!")



