// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.url === '/about') {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('About Page\n');
//   } else {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello, World!\n');
//   }
// });

// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000/');
// });


const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Home route
app.get('/', (req, res) => {
  res.send('Hello, World');
});

// About route (modify this in feature branch)
app.get('/about', (req, res) => {
  res.send('About Page');
});

app.listen(port, () => {
  console.log(Server running on http://localhost:${port});
});
