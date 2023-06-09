require("dotenv").config();
const PORT = 5432;
const express = require("express");
const server = express();
const apiRouter = require("./api");
const morgan = require("morgan");
server.use(morgan("dev"));

server.use(express.json());
console.log(process.env.JWT_SECRET);

server.use("/api", apiRouter);

const { client } = require("./db");
client.connect();

server.get("/add/:first/to/:second", (req, res, next) => {
  res.send(
    `<h1>${req.params.first} + ${req.params.second} = ${
      Number(req.params.first) + Number(req.params.second)
    }</h1>`
  );
});

server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});
