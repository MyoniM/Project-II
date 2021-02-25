// import getDataForEthiopia from './ethioApi'


const ethopia_container = document.querySelector('.Ethiopia');
document.addEventListener('DOMContentLoaded' , displayCaseData)
function displayCaseData(){

	getDataForEthiopia().then((data)=>{
        console.log(data)
	})



}