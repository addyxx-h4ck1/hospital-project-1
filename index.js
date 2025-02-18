const express = require('express');
const routers = require('./routes/route');
const port = 3030;
const { config } = require('dotenv');
config();

const server = express();

//Middleware
server.use(express.json());

server.use('/', routers);

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
