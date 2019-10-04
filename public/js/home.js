// variable declarations
var geocoder;
var marker;

// geocoding service to get lat and long
// https://developers-dot-devsite-v2-prod.appspot.com/maps/documentation/javascript/examples/geocoding-simple

function geocodeAddress(geocoder, resultsMap, address) {
  console.log(address);
  // var address = document.getElementById("address").value;
  geocoder.geocode({ address: address }, function(results, status) {
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

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: myLatLng
  });

  geocoder = new google.maps.Geocoder();

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Hello World!"
  });

  geocodeAddress(geocoder, map, "77001");
}

// ajax GET request to pull location and name wrapped in a function
function pullLocationDataFromMYSQL() {
  console.log(posts);
  for (i = 0; i < posts.length; i++) {
    var currentPost = posts[i];
    var name = currentPost.name;
    var telephone = currentPost.telephone;
    var email = currentPost.email;
    var location = currentPost.location;
    var description = currentPost.description;
  }
}

function postEventstoMap() {
  $.get("/api/events", function(data) {
    console.log(data);
    pullLocationDataFromMYSQL();
  });
}

postEventstoMap();
