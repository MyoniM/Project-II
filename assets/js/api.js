async function getData() {
	let response = await fetch('https://corona.lmao.ninja/v2/countries?sort=country');
	let data = await response.json();

	return data;
}

export default getData;

