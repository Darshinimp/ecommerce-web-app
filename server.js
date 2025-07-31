const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3001;

const pool = new Pool({
  user: 'your_pg_user',
  host: 'localhost',
  database: 'ecommerce',
  password: 'your_password',
  port: 5432,
});

app.use(express.json());
app.use(require('cors')());

app.get('/api/products', async (req, res) => {
  const result = await pool.query('SELECT * FROM products');
  res.json(result.rows);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
app.get('/api/departments', async (req, res) => {
  const result = await pool.query('SELECT * FROM departments');
  res.json(result.rows);
});