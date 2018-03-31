
let form = document.getElementById('location-form');
form.addEventListener('click', function(){
  let formbtn = document.getElementById('formbtn');
  animate(formbtn, 'pulse');
});
form.addEventListener('click', geocode);

function geocode(e){
  e.preventDefault();
  let location = document.getElementById('location-input').value;

  if(location){
      axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params:{
          address: location,
          key: 'AIzaSyDUfMGbqov295t7rYxRUeYt1D5ASMpPg5w'
        }
      })
      .then(function(response){
        let lati = response.data.results[0].geometry.location.lat;
        let long = response.data.results[0].geometry.location.lng;
        let coords = {lat: lati, lng: long};
        initMap(coords);
        
        buttons.style.visibility = 'visible';
        buttons.classList.add('animated');
        buttons.classList.add('flipInX');
        document.getElementById('mapContainer').style.visibility = 'visible';
        let alert = document.getElementById('alert');
        alert.style.visibility = 'hidden';
      })
      .catch(function(err){
        console.log(err);
        let alert = document.getElementById('alert');
        alert.style.visibility = 'visible';
        animate(alert, 'flash');
      });
  }
}
