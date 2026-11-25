require('dotenv').config();
const express = require('express');
const cors = require('cors');
const client = require('./db');

const app = express();
const port = process.env.PORT || 3000;

const recruitsRoutes = require('./routes/recruits.routes');
const centersRoutes = require('./routes/centers.routes');
const instructorsRoutes = require('./routes/instructors.routes');
const inventoryRoutes = require('./routes/inventory.routes');
const marksRoutes = require('./routes/marks.routes');
const sessionsRoutes = require('./routes/sessions.routes');
const subdivisionsRoutes = require('./routes/subdivisions.routes');

// Middleware (проміжні обробники)
app.use(cors()); // Дозволяємо запити з фронтенду
app.use(express.json()); // Дозволяємо серверу розуміти JSON у тілі запитів (POST/PUT)

// маршрути
app.use('/api/centers', centersRoutes);
app.use('/api/instructors', instructorsRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/marks', marksRoutes);
app.use('/api/recruits', recruitsRoutes);
app.use('/api/sessions', sessionsRoutes);
app.use('/api/subdivisions', subdivisionsRoutes);

// Запуск сервера
app.listen(port, () => {
  console.log(`🚀 Сервер працює на http://localhost:${port}`);
});