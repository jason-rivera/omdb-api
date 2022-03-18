const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const PORT = 8888;
const axios = require('axios');
const dotenv = require("dotenv");
dotenv.config();


const api_key = process.env.KEY;
const endPointUrl = "http://www.omdbapi.com/?";

console.log(api_key);


server.use(express.json());
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

server.get("/", (req, res) => {
  res.status(200).send("hi from nowhere land");
})

server.post("/movies", (req, res) => {
  const title = req.body.title;
  if (title === null || title === "") {
    res.status(400).send();
    return;
  }

  console.log(`${title} movie post request`)
  axios.get(`http://www.omdbapi.com/?t=${title}&plot=full&apikey=${api_key}`)
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(error => console.error(error));
})


server.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`)
})