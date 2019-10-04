// variable declarations
var geocoder;
var marker;
var map;
var address;

// geocoding service to get lat and long
// https://developers-dot-devsite-v2-prod.appspot.com/maps/documentation/javascript/examples/geocoding-simple

function geocodeAddress(geocoder, resultsMap, address) {
  // var address = document.getElementById("address").value;
  geocoder.geocode({ address: address }, function(results, status) {
    console.log(results);
    if (status === "OK") {
      resultsMap.setCenter(results[0].geometry.location);
      marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}

// initialize googlemap and center it over dallas
function initMap() {
  var myLatLng = { lat: 32.7767, lng: -96.797 };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: myLatLng
  });

  geocoder = new google.maps.Geocoder();

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Hello World!"
  });

  //   geocodeAddress(geocoder, map, "77001");
}

// ajax GET request to pull location and name wrapped in a function
function pullLocationDataFromMYSQL() {
  console.log(posts);
  for (i = 0; i < posts.length; i++) {
    var currentPost = posts[i];
    // var name = currentPost.name;
    // var telephone = currentPost.telephone;
    // var email = currentPost.email;
    var address = currentPost.location;
    console.log(address);
    console.log(typeof address);
    // var description = currentPost.description;
    geocodeAddress(geocoder, map, address);
    console.log(address);
  }
}

function postEventstoMap() {
  $.get("/api/events", function(data) {
    console.log(data);
    pullLocationDataFromMYSQL();
  });
}

postEventstoMap();
