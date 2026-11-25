const queries = require('../queriesJS/recruits.sql');
const executeQuery = require('./executeQuery')

const getByAppointmentDate = async (req, res) => {
    executeQuery(res, queries.getByAppointmentDate);
};

const getMin3Courses = async (req, res) => {
    executeQuery(res, queries.getMin3Courses);
};

const getByMaxMark = async (req, res) => {
    executeQuery(res, queries.getByMaxMark);
};

const getThatInFewSubdivision = async (req, res) => {
    executeQuery(res, queries.getThatInFewSubdivision);
};

const getByMaxTrainingCount = async (req, res) => {
    executeQuery(res, queries.getByMaxTrainingCount);
};

const getByNMissedSessions = async (req, res) => {
    const {title, n} = req.query;

    if (!title || n === undefined) {
        return res.status(400).json({ error: 'Потрібні параметри title та n' });
    }
    
    executeQuery(res, queries.getByNMissedSessions, [title, parseInt(n, 10)]);
};

module.exports = {
    getByAppointmentDate,
    getMin3Courses,
    getByMaxMark,
    getThatInFewSubdivision,
    getByMaxTrainingCount,
    getByNMissedSessions
};