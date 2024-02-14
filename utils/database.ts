const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

export async function getNews(page: number) {
  const limit = 10; // number of records per page
  const offset = (page - 1) * limit; // calculate offset

  try {
    const result = await pool.query('SELECT * FROM news ORDER BY id DESC LIMIT $1 OFFSET $2', [limit, offset]);
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

export async function searchNews(title: string, page: number) {
  const limit = 10; // number of records per page
  const offset = (page - 1) * limit; // calculate offset

  try {
    const result = await pool.query(
      'SELECT * FROM news WHERE title ILIKE $1 ORDER BY id DESC LIMIT $2 OFFSET $3',
      [`%${title}%`, limit, offset]
    );
    return result.rows;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function filterByCategory(category: string, page: number) {
  const limit = 10;
  const offset = (page - 1) * limit;
  try {
    const result = await pool.query(
      'SELECT * FROM news WHERE category ILIKE $1 ORDER BY id DESC LIMIT $2 OFFSET $3',
      [`%${category}%`, limit, offset]
    )
    return result.rows;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function filterBySentiment(sentiment: string, page: number) {
  const limit = 10;
  const offset = (page - 1) * limit;
  try {
    let query = '';
    let params: number[] = [];

    const sentimentMap: { [key: string]: string } = {
      'positif': '>',
      'negatif': '<',
      'netral': '='
    };
    
    const sentimentCondition = sentimentMap[sentiment.toLowerCase()];
    
    if (sentimentCondition) {
      query = `SELECT * FROM news WHERE sentiment ${sentimentCondition} 0 ORDER BY id DESC LIMIT $1 OFFSET $2`;
      params = [limit, offset];
    }

    const result = await pool.query(query, params);
    return result.rows;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

