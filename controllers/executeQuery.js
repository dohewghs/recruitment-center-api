const pool = require('../db');

async function executeQuery(res, sql, params = []) {
  try {
    const result = await pool.query(sql, params);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Помилка сервера при виконанні запиту' });
  }
}

module.exports = executeQuery;