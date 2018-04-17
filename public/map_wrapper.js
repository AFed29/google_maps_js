const MapWrapper = function (container, mapStart, zoomLevel) {

  this.googleMap = new google.maps.Map(container, {
    center: mapStart,
    zoom: zoomLevel
  });

  this.markers = [];
}

  MapWrapper.prototype.addMarker = function (coords) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: coords,
    });
    this.markers.push(marker)
  };

  MapWrapper.prototype.addClickListener = function () {
    google.maps.event.addListener(this.googleMap, 'click', (event) => {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      this.addMarker({lat: lat, lng: lng});
    });
  };
