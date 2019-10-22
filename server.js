// setup empty JS object to act as endpoint for all routes
projectData = {};

// require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser')

// start up an instance of app
const app = express();

/* middleware*/
// here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// cors for cross origin allowance
const cors = require('cors');
app.use(cors()); 

// initialize the main project folder
app.use(express.static('website'));

// setup Server
const port = 8000;

// spin up the server 
const server = app.listen(port, listening);

function listening() {
    console.log(`running on localhost: ${port}`);
}

// setup GET route
app.get('/entries', getData);

function getData(req, res) {
	res.send(projectData);
}

// setup POST route
app.post('/', postData);

const entries = [];

function postData(req, res) {

	newEntry = {
		location: req.body.location,
		weather: req.body.weather,
		feelings: req.body.feelings
	};

	entries.push(newEntry);
	console.log(entries);
}