const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ecommerce',
  password: 'your_password',  // ← replace with your PostgreSQL password
  port: 5432,
});

module.exports = pool;