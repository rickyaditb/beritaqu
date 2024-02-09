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
    result.rows[0]['summary'] = result.rows[0]['summary'].split('\n')
      .filter((line: string) => /^[-\d\s]/.test(line))
      .map((line: string) => line.replace(/\*/g, ''))
      .map((line: string) => line.replace(/^- |\d+\. /, ''));
    return result.rows[0];
  } catch (err) {
    console.error(err);
    throw err;
  }
}