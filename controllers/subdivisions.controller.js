const queries = require('../queriesJS/subdivisions.sql');
const executeQuery = require('./executeQuery')

const getByMaxRecruitCount = async (req, res) => {
    executeQuery(res, queries.getByMaxRecruitCount);
};

const getBySomeTrainings = async (req, res) => {
    executeQuery(res, queries.getBySomeTrainings);
};

const getByMaxAvgMarks = async (req, res) => {
    executeQuery(res, queries.getByMaxAvgMarks);
};

module.exports = {
    getByMaxRecruitCount,
    getBySomeTrainings,
    getByMaxAvgMarks
};