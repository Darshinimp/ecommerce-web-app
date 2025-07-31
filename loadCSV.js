const fs = require('fs');
const { Pool } = require('pg');
const csv = require('fast-csv');

const pool = new Pool({
  user: 'your_pg_user',
  host: 'localhost',
  database: 'ecommerce',
  password: 'your_password',
  port: 5432,
});

fs.createReadStream('products.csv')
  .pipe(csv.parse({ headers: true }))
  .on('data', async (row) => {
    const { name, price, department } = row;
    await pool.query(
      'INSERT INTO products (name, price, department) VALUES ($1, $2, $3)',
      [name, price, department]
    );
  })
  .on('end', () => {
    console.log('CSV data imported');
    pool.end();
  });