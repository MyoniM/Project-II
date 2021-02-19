async function getLocationBasedData() {
	let response = await fetch(`https://corona.lmao.ninja/v3/covid-19/countries/${geoplugin_countryCode()}`);
	let data = response.json();

	return data;
}
export default getLocationBasedData;
