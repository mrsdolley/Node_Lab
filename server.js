// server.js
const http = require("http");
const quotes= require('./quotes');

const onRequest= (request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write(`${quotes.randomQuote().quote}`);
    response.end();
    }

http.createServer(onRequest).listen(3000);