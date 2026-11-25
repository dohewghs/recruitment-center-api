const queries = require('../queriesJS/sessions.sql');
const executeQuery = require('./executeQuery')

const getByProvidedInCertainCenter = async (req, res) => {
    const { center } = req.query;
    
    if (!center) {
        return res.status(400).json({ error: 'Потрібні параметри center' });
    }

    if (/^\d+$/.test(center)) {
        // Це точно ціле число (ID), наприклад "1" або "42"
        const centerId = Number(center);

        executeQuery(res, queries.getByProvidedInCertainCenter_id, [centerId]);
    } else {
        // Це стрічка (наприклад, "Центр Львів-1")

        executeQuery(res, queries.getByProvidedInCertainCenter_n, [center]);
    }

};

module.exports = {
    getByProvidedInCertainCenter
};