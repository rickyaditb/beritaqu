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
    const result = await pool.query('SELECT * FROM news ORDER BY id DESC LIMIT $1 OFFSET $2', [limit + 1, offset]);
    const hasNextPage = result.rows.length > limit;
    if (hasNextPage) {
      result.rows.pop();
    }
    return { rows: result.rows, hasNextPage };
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

export async function filterNews(search: string, category: string, source: string, sentiment: string, page: number) {
  const limit = 10; // number of records per page
  const offset = (page - 1) * limit; // calculate offset
  let query = 'SELECT * FROM news WHERE';
  let params: (string | number)[] = [];

  const sentimentMap: { [key: string]: string } = {
    'positif': '>',
    'negatif': '<',
    'netral': '='
  };

  if (search) {
    query += ` title ILIKE $${params.length + 1}`;
    params.push(`%${search}%`);
  }

  if (category) {
    query += (params.length ? ' AND' : '') + ` category ILIKE $${params.length + 1}`;
    params.push(`%${category}%`);
  }

  if (source) {
    query += (params.length ? ' AND' : '') + ` source ILIKE $${params.length + 1}`;
    params.push(`%${source}%`);
  }

  if (sentiment) {
    const sentimentCondition = sentimentMap[sentiment.toLowerCase()];
    if (sentimentCondition) {
      query += (params.length ? ' AND' : '') + ` sentiment ${sentimentCondition} 0`;
    }
  }

  query += ' ORDER BY id DESC LIMIT $' + (params.length + 1) + ' OFFSET $' + (params.length + 2);
  params.push(limit + 1, offset);

  try {
    const result = await pool.query(query, params);
    const hasNextPage = result.rows.length > limit;
    if (hasNextPage) {
      result.rows.pop();
    }
    return { rows: result.rows, hasNextPage };
  } catch (err) {
    console.error(err);
    throw err;
  }
}