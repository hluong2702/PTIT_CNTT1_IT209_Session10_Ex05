const http = require('http');

const PORT = 8080;
const DB_HOST = process.env.DB_HOST || 'database';
const DB_NAME = process.env.DB_NAME || 'production_db';
const DB_USER = process.env.DB_USER || 'admin_user';

const server = http.createServer((req, res) => {
  if (req.url === '/health' || req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'UP',
      service: 'backend',
      database: {
        host: DB_HOST,
        name: DB_NAME,
        user: DB_USER,
        status: 'Configured'
      },
      message: 'Multi-service architecture successfully orchestrated with Docker Compose & .env',
      timestamp: new Date().toISOString()
    }, null, 2));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`[Backend Service] Listening on port ${PORT}`);
  console.log(`[Backend Service] Configured DB_HOST: ${DB_HOST}, DB_NAME: ${DB_NAME}`);
});
