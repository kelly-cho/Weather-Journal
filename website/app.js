// global variables
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&APPID=0e2ec7dc3d32e820f8abdd569b0742b9';

// create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

document.getElementById('generate').addEventListener('click', generateEntry);

// get weather info from the api based on the zip entered
function generateEntry(e) {
	const zip = document.getElementById('zip').value;
	const feelings = document.getElementById('feelings').value;
	
	getWeather(baseUrl, zip, apiKey) // NO SEMICOLON!!!
	// data is the result returned from the api call
	.then(function(data) {

		console.log('heee');
		postData('/', {location: data.name, weather: data.weather[0].main, feelings: feelings});
	});
}

// async GET function
const getWeather = async (baseUrl, zip, apiKey) => {
	const response = await fetch(baseUrl + zip + apiKey);

	try {
		const data = await response.json();
		console.log(data);
		return data;
	} catch(error) {
		console.log('error', error);
	}
}

// async POST function
const postData = async (url = '', data = {}) => {

	const response = await fetch (url, {
	method: 'POST',	// * GET, POST, PUT, DELETE, etc.
	credentials: 'same-origin', // include, *same-origin, omit
	headers: {
		'Content-Type': 'application/json', // indicates that our app run on JSON data
	},
	body: JSON.stringify(data), // body data type must match "Content-Type" header
	});

	try {
		const newData = await response.json();
		return newData;

	} catch(error) {
		console.log('error', error);
	}
}

