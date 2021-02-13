import 'https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js';

const mapbox_token = 'pk.eyJ1IjoieW9uaW1lcmtlYnUiLCJhIjoiY2tsM2dsYmsxMW1lNTJzcW8ybDM0eGtnbCJ9._Gb2Fd84O3SO2-LgHIICpw';

mapboxgl.accessToken = mapbox_token;
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/dark-v10',
	zoom: 2,
	minZoom: 2,
	center: [38, 9],
});

//to give the marker d/t color for d/t amount of cases
var getFromCount = (count) => {
	if ((count >= 50000) & (count < 100000)) {
		return 'orange';
	}
	if (count >= 100000) {
		return 'red';
	}
	return 'grey';
};

fetch('https://corona.lmao.ninja/v2/countries?sort=country')
	.then((response) => response.json())
	//used .then again b/c response.json also returns a promise
	.then((data) => {
		data.forEach((country) => {
			const { lat, long } = country['countryInfo'];
			const cases = country['cases'];

			//create onclick popup
			var popup = new mapboxgl.Popup({ offset: 25 }).setText(cases);

			new mapboxgl.Marker({
				color: getFromCount(cases),
			})
				.setLngLat([long, lat])
				.setPopup(popup) // sets a popup on this marker

				.addTo(map);
		});
	});
