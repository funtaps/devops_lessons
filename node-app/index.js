const http = require('http');

const hostname = '0.0.0.0';
const port = process.env.PORT;

const server = http.createServer((req, res) => {
  if (req.url === "/node/hello") {
    res.statusCode = 200;
    res.end('Hello from node.js');
    return;
  }
  res.statusCode = 404;
  res.end(`404. No page "${req.url}" on node`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

process.on('uncaughtException', (exception) => {
  console.log('Exception:\n', exception);
});
