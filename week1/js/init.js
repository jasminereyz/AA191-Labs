
// Initialize the map
const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/dataviz/style.json?key=4TKk6j8yWhxaW9xU2cx6', // Your style URL
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
   
    // Add a marker to the map
const marker = new maplibregl.Marker()
.setLngLat([-118.45, 34.05])
.setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
.setHTML('<div class="awesomePopup">Hello! This is an HTML popup, meaning I can add any <tags> I want here! Just be sure to close them </tags></div>'))
.addTo(map);
