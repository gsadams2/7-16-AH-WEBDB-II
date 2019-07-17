const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(morgan("dev"));
server.use(bodyParser.json());
server.use(cors());

server.get("/", (req, res) => res.send("<h1> AH YOOOOO </h1> "));

module.exports = server;
