// This function grabs posts from the database and updates the view
function getEvents() {
  $.get("/api/events", function(data) {
    posts = data;
    if (!posts || !posts.length) {
      displayEmpty(author);
    } else {
      initializeRows();
    }
  });
}

function initializeRows() {
  console.log(posts);
  for (i = 0; i < posts.length; i++) {
    console.log(posts[i]);
    var currentPost = posts[i];

    var name = currentPost.name;
    var telephone = currentPost.telephone;
    var email = currentPost.email;
    var location = currentPost.location;
    var description = currentPost.description;

    $("#event-table").append(
      $("<tr>").append(
        $("<td>").text(name),
        $("<td>").text(telephone),
        $("<td>").text(email),
        $("<td>").text(location),
        $("<td>").text(description)
      )
    );
  }
}

getEvents();

// **********googlemaps api -ignore for now************
// ajax get request to get zip code
// loop through database

// // goecoding service to get lat and long
// var lat = '';
// var lng = '';
// var address = {zipcode} or {city and state};
// geocoder.geocode( { 'address': address}, function(results, status) {
//   if (status == google.maps.GeocoderStatus.OK) {
//      lat = results[0].geometry.location.lat();
//      lng = results[0].geometry.location.lng();
//     });
//   } else {
//     alert("Geocode was not successful for the following reason: " + status);
//   }
// });
// alert('Latitude: ' + lat + ' Logitude: ' + lng);

// // push the markers to the map
// function initMap() {
//   var myLatLng = { lat: 32.7767, lng: -96.797 };

//   var map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 8,
//     center: myLatLng
//   });

//   var marker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     title: "Hello World!"
//   });
// }
// **********googlemaps api -ignore for now************
