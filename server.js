const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const PORT = 8888;

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

server.get("/movies", (req, res) => {
  res.status(200).send("hi MOVIES");
})


server.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`)
})