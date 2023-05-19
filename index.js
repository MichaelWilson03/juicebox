require("dotenv").config();
const PORT = 5432;
const express = require("express");
const server = express();
const apiRouter = require("./api");
console.log(process.env.JWT_SECRET);

server.use("/api", apiRouter);
server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});
