import http from 'http';

const DEFAULT_PORT = 8080;

const port = process.env.PING_LISTEN_PORT || DEFAULT_PORT;

const server = http.createServer((req, res) => {
  if (req.url === '/ping' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.headers));
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});