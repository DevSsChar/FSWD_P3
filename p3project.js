// Project: Basic Static File Server

// Objective: Build an HTTP server to serve static files like HTML, CSS, and images.
// Tasks:
// Create a simple HTML page with a welcome message and a few images.
// Use the http and fs modules to serve these files when the browser requests them.
// Add logic to handle 404 errors when a file is not found.

const fs = require('fs')
const http = require('http')
const path = require('path')

//create a server object:
http.createServer(function (req, res) {
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    })
}).listen(8080); 
