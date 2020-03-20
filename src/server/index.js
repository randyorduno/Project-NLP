const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Aylien = require("aylien_textapi");
const dotenv = require('dotenv');
dotenv.config();
const PORT = 7000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("dist"));

const textApi = new Aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

app.get("/", (req, res) => res.sendFile("index.html"));

app.post("/api", (req, res) => {
  const { text } = req.body;
  console.log("Request to '/api' endpoint", text);
  textApi.sentiment({ text }, (error, result, remaining) => {
    console.log("Aylien Callback", result, remaining);
    res.send(result);
  });
});


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
