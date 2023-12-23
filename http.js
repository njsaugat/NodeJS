// const http=require('http')
// console.log(http.createServer.toString())
// const hello=http.Server.toString();
// console.log(hello);
const http = require("http");

const server = http.createServer((request, response) => {
  // console.log(response)
  // so like request auxa ani tesko url lai compare garne ho nita
  console.log(request.url);
  // so like based on different request, we can send
  // different websites
  // if request.url==='/about' ==> then send about page and so on
  if (request.url === "/about") {
    response.end("know about us");
  }
  if (request.url === "/") {
    response.end("hello there");
  }
  response.end("OOPS!");
  // response.write(``);
  // response.end();
});

server.listen(3000);
