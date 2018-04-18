const MapWrapper = function (container, mapStart, zoomLevel) {

  this.googleMap = new google.maps.Map(container, {
    center: mapStart,
    zoom: zoomLevel
  });

  this.markers = [];
}

let count = 0;

MapWrapper.prototype.addMarker = function (coords, placeInfo = "") {
  count++
  const marker = new google.maps.Marker({
    map: this.googleMap,
    position: coords,
  });
  const infoWindow = new google.maps.InfoWindow({
    content: `<div id="info-window">
      <h3> Marker #${ count }</h3>
      <p>Latitude: ${coords.lat}, Longtitude: ${coords.lng}</p>
      <p>${ placeInfo }</p>
    </div>
    `
  })
  marker.addListener('click', function () {
    infoWindow.open(this.googleMap, marker);
  })
  this.markers.push(marker)
};

MapWrapper.prototype.addClickListener = function () {
  google.maps.event.addListener(this.googleMap, 'click', (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    this.addMarker({lat: lat, lng: lng});
  });
};
