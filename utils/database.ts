const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

export async function getNews() {
  try {
    const result = await pool.query('SELECT * FROM news ORDER BY id DESC');
    return result.rows;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function getNewsById(id: number) {
  try {
    const result = await pool.query('SELECT * FROM news WHERE id = $1', [id]);
    return result.rows[0];
  } catch (err) {
    console.error(err);
    throw err;
  }
}