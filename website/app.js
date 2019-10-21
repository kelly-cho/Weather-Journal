/* Global Variables */
let baseUrl = 'api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&APPID=0e2ec7dc3d32e820f8abdd569b0742b9';

// create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();



/* async GET function */
const getData = async (url = '') => {
	const response = await fetch(url);

	try {
		const allData = await response.json();
		console.log(allData);
	} catch(error) {
		console.log('error', error);
	}
}

/* async POST function */
const postData = async (url = '', data = {}) => {
	console.log(data);

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
		console.log(newData);
		return newData;

	} catch(error) {
		console.log('error', error);
	}
}

postData('/',{animal:'dogs'});
getData(baseUrl + '92126' + apiKey);