const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

client.connect()
  .then(() => console.log('✅ Підключено до бази Neon'))
  .catch(err => console.error('❌ Помилка підключення:', err));

module.exports = client;