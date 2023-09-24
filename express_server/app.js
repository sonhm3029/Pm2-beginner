const express = require("express");

const server = express();

const PORT = process.env.EXPRESS_PORT

server.get("/", (req, res, next) => {
  res.send("hello world");
});

server.listen(PORT, () => {
  console.log(`Server express is running on port ${PORT}`);
});
