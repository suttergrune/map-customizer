# Map Customizer

https://map-customizer.herokuapp.com

This fully responsive application utilizes the Google Maps Geocoding API and the Google Maps JavaScript API. When the user submits a location, a request is made to the Google Maps Geocoding API to get the latitude and longitude of the desired location. The request is made with the help of Axios (https://github.com/axios/axios). Once the latitude and longitude are retrieved, the Google Maps Javascript API is used to display a map of the corresponding location. The user can then choose between six different styles to apply to the map, each with it's own button. When the user clicks a button, the corresponding style is applied to the map. The "Night" and "Default" styles are from the Google Maps API documentation, while the other styles are from snazzymaps.com (https://snazzymaps.com).

The webpage's style is built with Bootstrap and the webpage's animations are fueled by Animate.css (https://daneden.github.io/animate.css).
