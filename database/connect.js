const pg = require('pg');

const pool = new pg.Pool({
  user: process.env.DATABSE_USER,
  host: process.env.DATABASE_HOST,
  database: 'Hospital DB',
  password: process.env.PASSWORD,
  port: 5432,
});

module.exports = pool;
