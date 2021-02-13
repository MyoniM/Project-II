import 'https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js';

const mapbox_token = 'pk.eyJ1IjoieW9uaW1lcmtlYnUiLCJhIjoiY2tsM2dsYmsxMW1lNTJzcW8ybDM0eGtnbCJ9._Gb2Fd84O3SO2-LgHIICpw';

fetch('https://corona.lmao.ninja/v2/countries?sort=country')
	.then((response) => response.json())
	//used .then again b/c response.json also returns a promise
	.then((data) => console.log(data));

mapboxgl.accessToken = mapbox_token;
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/dark-v10',
	zoom: 2,
	center: [0, 20],
});
