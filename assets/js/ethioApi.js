async function getDataForEthiopia(){
	let response = await fetch( 'https://corona.lmao.ninja/v2/countries/Ethiopia?yesterday&strict&query%20');
	let dataValue = await response.json();
	return dataValue;
}