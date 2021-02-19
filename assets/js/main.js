import 'https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js';
import geoData from './geoLocate.js';
import api from './api.js';

const mapbox_token = 'pk.eyJ1IjoieW9uaW1lcmtlYnUiLCJhIjoiY2tsM2dsYmsxMW1lNTJzcW8ybDM0eGtnbCJ9._Gb2Fd84O3SO2-LgHIICpw';

mapboxgl.accessToken = mapbox_token;
geoData().then((data) => {
	const { long, lat } = data.countryInfo;
	console.log(data.country, long, lat);
	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/dark-v10',
		zoom: 5,
		minZoom: 2.15,
		center: [long, lat],
	});

	api().then((data) => {
		data.forEach((Country) => {
			const { lat, long } = Country['countryInfo'];
			const { country, cases, deaths, recovered } = Country;
			//create marker
			const marker = new mapboxgl.Marker({
				color: getFromCount(cases),
			}).setLngLat([long, lat]);

			// get the marker element
			const element = marker.getElement();
			element.id = 'marker';

			//create onclick popup
			var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
				'<h3>' +
					country +
					'</h3><p id="case">' +
					cases +
					'</p><p id="death">' +
					deaths +
					'</p><p id="recovered">' +
					recovered +
					'</p>'
			);

			// hover event listener
			element.addEventListener('mouseenter', () => popup.addTo(map));
			element.addEventListener('mouseleave', () => popup.remove());

			// add popup to marker
			marker.setPopup(popup);
			// add marker to map
			marker.addTo(map);
		});
	});
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
