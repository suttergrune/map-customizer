
let map;

function initMap(coords) {
  // map options
  let options = {
    zoom: 10,
    center: coords,
    mapTypeControl: false
    //center: {lat: 37.3541, lng: -121.9552}
  };

  // new map
  map = new google.maps.Map(document.getElementById('map'), options);

  let marker1 = new google.maps.Marker({
    position: coords,
    map: map,
    //icon: props.icon
  });

  // listen for click on map
  google.maps.event.addListener(map, 'click', function (event) {
    addMarker({ coords: event.latLng })
  });

  function addMarker(props) {
    let marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      //icon: props.icon
    });
    marker.addListener('click', function () {
      infoWindow.open(map, marker);
    });
  }

}