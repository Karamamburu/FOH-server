import { PORT, URL } from './const.js';
import http from 'http';
import { generateRandomOrder } from './generate.js';

const server = http.createServer((req, res) => {
  if (req.url === `/${URL.getRandomOrder}`) {
    const order = generateRandomOrder();
    res.writeHead(200, { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:5173',
      'Access-Control-Allow-Methods': 'GET',
    });
    res.end(JSON.stringify(order));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
