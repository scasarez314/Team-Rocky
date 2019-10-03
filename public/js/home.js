// ajax get request to get zip code
// loop through database

// goecoding service to get lat and long
var lat = '';
var lng = '';
var address = {zipcode} or {city and state};
geocoder.geocode( { 'address': address}, function(results, status) {
  if (status == google.maps.GeocoderStatus.OK) {
     lat = results[0].geometry.location.lat();
     lng = results[0].geometry.location.lng();
    });
  } else {
    alert("Geocode was not successful for the following reason: " + status);
  }
});
alert('Latitude: ' + lat + ' Logitude: ' + lng);

// push the markers to the map
function initMap() {
  var myLatLng = { lat: 32.7767, lng: -96.797 };

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Hello World!"
  });
}
