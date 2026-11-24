async function executeQuery(res, sql, params = []) {
  try {
    const result = await client.query(sql, params);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Помилка сервера при виконанні запиту' });
  }
}

const express = require('express');
const cors = require('cors');
const client = require('./db');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware (проміжні обробники)
app.use(cors()); // Дозволяємо запити з фронтенду
app.use(express.json()); // Дозволяємо серверу розуміти JSON у тілі запитів (POST/PUT)

// Тестовий маршрут: витягуємо дані з тестової таблиці
app.get('/api/recruitment_centers', (req, res) => {
  executeQuery(res, 'SELECT * FROM recruitment_centers;');
});

// Запуск сервера
app.listen(port, () => {
  console.log(`🚀 Сервер працює на http://localhost:${port}`);
});