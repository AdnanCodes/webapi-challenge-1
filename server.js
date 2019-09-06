const express = require("express");

const server = express();
server.use(express.json());

function logger(req, res, next) {
  console.log(`${new Date().toISOString()} ${req.method} to ${req.url}`);
  next();
}
server.use(logger);

server.get("/", (req, res) => {
  res.send(`<h2>WEB API SPRINT</h2>`);
});

//custom middleware
module.exports = server;
