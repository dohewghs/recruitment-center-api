const pool = require('../db');
const queries = require('../queriesJS/recruits.sql');

const getByAppointmentDate = async (req, res) => {
    try {
        const result = await pool.query(queries.getByAppointmentDate);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Помилка виконання запиту' });
    }
};




const getByNMissedSessions = async (req, res) => {
    try {
        const {title, n} = req.query;

        if (!title || n === undefined) {
            return res.status(400).json({ error: 'Потрібні параметри title та n' });
        }

        const result = await pool.query(queries.getByNMissedSessions, [title, parseInt(n, 10)]);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Помилка виконання запиту' });
    }
};

module.exports = {
    getByAppointmentDate,
    getByNMissedSessions
};