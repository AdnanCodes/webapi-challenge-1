const express = require("express");
const projectRouter = require("./App-Routes/projectRoute");
const server = express();
server.use(express.json());

function logger(req, res, next) {
  console.log(`${new Date().toISOString()} ${req.method} to ${req.url}`);
  next();
}
server.use(logger);
server.use("/projects", projectRouter);

server.get("/", (req, res) => {
  res.send(`<h2>WEB API SPRINT</h2>`);
});

//custom middleware
module.exports = server;
