let newCase = document.querySelector('#enew-cases');
let newDeath = document.querySelector('#enew-deaths');
let totalCase = document.querySelector('#etotal-cases');
let totalDeath = document.querySelector('#etotal-deaths');
let totalRecovered = document.querySelector('#etotal-recovered');
let criticalCase = document.querySelector('#eserious-critical');
const ethopia_container = document.querySelector('.Ethiopia');
let imgOne = document.querySelector('#imgOne');
let two = document.querySelector('#Two');
let three = document.querySelector('#Three');
document.addEventListener('DOMContentLoaded', displayCaseData);
function displayCaseData() {
	getDataForEthiopia().then((data) => {
		console.log(data);
		newCase.innerHTML = data.todayCases;
		newDeath.innerHTML = data.todayDeaths;
		totalDeath.innerHTML = data.deaths;
		totalCase.innerHTML = data.cases;
		totalRecovered.innerHTML = data.recovered;
		criticalCase.innerHTML = data.critical;

		let getBackgroundImage = data.countryInfo.flag;
		// ethopia_container.style.backgroundImage ="url('" + getBackgroundImage + "')";
		// ethopia_container.style.backgroundRepeat = 'no-repeat'
		imgOne.src = getBackgroundImage;
	});
}
