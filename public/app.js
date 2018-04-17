
document.addEventListener('DOMContentLoaded', () => {
  const mapContainer = document.querySelector('#main-map');

  const mapStart = {lat: 55.89186731875752, lng: -3.72244421679693}
  const mainMap = new MapWrapper(mapContainer, mapStart, 9);


  const ccEdinburgh = {lat: 55.946962, lng: -3.201958};
  const ccGlasgow = {lat:55.865477, lng:-4.257998}
  mainMap.addMarker(ccEdinburgh, 'CodeClan Edinburgh');
  mainMap.addMarker(ccGlasgow, 'CodeClan Glasgow');

  mainMap.addClickListener();

  const moveToPerthButton = document.querySelector('#take_to_perth');
  moveToPerthButton.addEventListener('click', function () {
    mainMap.googleMap.setCenter({lat: -31.950527, lng: 115.860457});
  });

  const whereAmIButton = document.querySelector('#where_am_i');
  whereAmIButton.addEventListener('click', function () {
    console.log('click');
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position.coords.latitude, position.coords.longitude);
      mainMap.googleMap.setCenter({lat: position.coords.latitude, lng: position.coords.longitude});
    });
  });

});
