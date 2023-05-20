const http = require('http');
// import express
const express = require('express');

const app = express();

// next is a function, part of express
app.use((req, res, next) => {
    console.log('in the middleware');
    next(); // allows the request to continue to the next middleware
});

app.use((req, res, next)=> {
    console.log('in the next middleware');
    next();
})
app.use((req, res, next)=> {
    console.log('in third middleware');
    res.send('<h1>Hello from Express!</h1>');
})

const server = http.createServer(app);

server.listen(3000);
