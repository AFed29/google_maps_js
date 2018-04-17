document.addEventListener('DOMContentLoaded', () => {
  const mapContainer = document.querySelector('#main-map');

  const mapStart = {lat: 55.89186731875752, lng: -3.72244421679693}
  const mainMap = new MapWrapper(mapContainer, mapStart, 9);


  const ccEdinburgh = {lat: 55.946962, lng: -3.201958};
  const ccGlasgow = {lat:55.865477, lng:-4.257998}
  mainMap.addMarker(ccEdinburgh, 'CodeClan Edinburgh');
  mainMap.addMarker(ccGlasgow, 'CodeClan Glasgow');

  mainMap.addClickListener();
});
