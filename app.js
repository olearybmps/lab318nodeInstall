const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World!\n');
// });

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');


      if (req.url === '/') {
          // Default route
          res.write('<h1 style="color: red">Hello World!</h1>');
          res.write('<p>I wonder what else we can send...</p>');
      } else if (req.url === '/about') {
          // About route
          res.write('<h1>About Us</h1>');
          res.write(
              '<p>We are a company that loves to create awesome web applications!</p>'
          );
      } else if (req.url === '/contact') {
          // Contact route
          res.write('<h1>Contact Us</h1>');
          res.write('<p>You can reach us at info@example.com.</p>');
      } else {
          // 404 Not Found route
          res.statusCode = 404;
          res.write('<h1>404 Not Found</h1>');
          res.write('<p>The page you are looking for does not exist.</p>');
      }
      
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});