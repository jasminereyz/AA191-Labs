
// Initialize the map
const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/streets/style.json?key=wsyYBQjqRwKnNsZrtci1', // Your style URL
    center: [ -118.444, 34.0709], // Starting position [lng, lat]
    zoom: 15 // Starting zoom level
});

// Add a marker to the map
new maplibregl.Marker()
    .setLngLat([-118.44635511934653,34.06643597028545 ])
    .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
        .setHTML('Ronald Reagan is where I volunteer!'))
    .addTo(map);


    new maplibregl.Marker()
        .setLngLat([-118.4437728522197,34.06501805126943])
        .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
            .setHTML('Jules Stein Institute is where I work'))
        .addTo(map); 

        new maplibregl.Marker()
        .setLngLat([-118.44349975068366, 34.06690349987687,])
        .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
            .setHTML('CHS is where I conduct Research and learn new clinical skills'))
        .addTo(map);     

