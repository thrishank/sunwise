const menu = document.getElementsByClassName("dropdown_menu")
const bars = document.getElementsByTagName("i")

for (let i = 0; i < bars.length; i++) {
    bars[i].addEventListener("click", function () {
        if (menu[0].style.display === "block") {
            menu[0].style.display = "none";
        } else {
            menu[0].style.display = "block";
        }
    });
}
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0, lng: 0 },
    zoom: 10,
  });

  // Add a listener for the click event
  map.addListener("click", (event) => {
    // Get the clicked location
    const location = event.latLng.toJSON();

    // Display the location in the address input
    const addressInput = document.getElementById("address");
    addressInput.value = `${location.lat}, ${location.lng}`;
  });
}

function geocodeAddress() {
  const geocoder = new google.maps.Geocoder();
  const address = document.getElementById("address").value;

  geocoder.geocode({ address: address }, (results, status) => {
    if (status === "OK") {
      // Move the map to the first result
      map.setCenter(results[0].geometry.location);
      map.setZoom(16);

      // Display the location in the address input
      const addressInput = document.getElementById("address");
      addressInput.value = results[0].formatted_address;
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}
