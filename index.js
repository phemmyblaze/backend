const express = require("express");

const PORT = 4343;
////create a server app
const server = express();

////create listening routes
server.get("/", function (request, response) {
  response.send("Idan gan gan");
});

///contact us route
server.get("/contact", (request, response) => {
  response.status(200).send({
    message: "You are idan's page",
    data: null,
    code: "success",
  });
});

//////make your server start listening for communication

server.listen(PORT, () => {
  console.log(`Hello world from ${PORT}`);
});
