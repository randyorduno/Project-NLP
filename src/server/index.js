var path = require('path')
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

/* Initializing the main project folder */
app.use(express.static('website'));

const port = 5000;

// TODO-Spin up the server

const server = app.listen(port, listening);

function listening () {
    console.log('Server is running');
}


var AYLIENTextAPI = require('aylien_textapi');
const textapi = new AYLIENTextAPI({
    application_id: "044a5ae3",
    application_key: "5c2431cf817ff2b89a2f07d4fda1736e"

  });

const newData = []

textapi.sentiment({
'text': 'John is a very good football player!'
}, function(error, response) {
if (error === null) {
    const data = response
    console.log(data);
}
app.post('/app', addPost)

function addPost (req, res) {
  newData.push(req.body)
  res.send(newData)
}
})
