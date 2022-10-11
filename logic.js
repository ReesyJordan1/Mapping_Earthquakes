// Add console.log to check to see if our code is working.
console.log("working");

// this will help us confirm that our logic.js file is being accessed in the console on Chrome.

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([40.7, -94.5], 4); // FOR CIRCLE
// let map = L.map('mapid').setView([36.1733, -120.1794], 7);  // FOR LINE
let map = L.map('mapid').setView([37.6213, -122.3790], 5); // FOR MULTIPLE LINE


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

//  Add a marker to the map for Los Angeles, California.

//let marker = L.marker([34.0522, -118.2437]).addTo(map);

L.circle([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: "#ffffa1"
 }).addTo(map);
// MAP STYLES:
// mapbox/streets-v11
// mapbox/outdoors-v11
// mapbox/light-v10
// mapbox/dark-v10
// mapbox/satellite-v9
// mapbox/satellite-streets-v11


// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
  cityData.forEach(function(city) {
    console.log(city)
    //L.marker(city.location)
    L.circleMarker(city.location, {
        radius : city.population/100000,
        color: "black",
        fillColor: "#ffffa1"
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population + "</h3>")
    .addTo(map);
   });


   // MAP LINES

   let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791], // MULTI-LINE
    [47.4502, -122.3088]  // MULTI-LINE
  ];

  L.polyline(line, {
    color: "red"
  }).addTo(map);

  L.polyline(line, {
    color: "yellow"
 }).addTo(map);
