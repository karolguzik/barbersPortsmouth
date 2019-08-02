function initMap() {
  const location = {
    lat: 50.789293,
    lng: -1.073635
  }
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: location
  });

  const marker = new google.maps.Marker({
    position: location,
    map: map
  });
}