const queries = require('../queriesJS/marks.sql');
const executeQuery = require('./executeQuery')

const getAvgMarkForInstructor = async (req, res) => {
    executeQuery(res, queries.getAvgMarkForInstructor);
};

module.exports = {
    getAvgMarkForInstructor
};