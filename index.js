const express = require('express');
const routers = require('./routes/route');
const port = 3030;

const server = express();

server.use('/', routers);

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
