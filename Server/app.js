require("./dal");

const albumController = require('./controllers/album-controller')
const express = require('express');
const cors = require("cors");
const server = express();
server.use(express.json());


server.use("/api", albumController);

server.listen(3000, () => console.log("Listening on http://localhost:3000"));
