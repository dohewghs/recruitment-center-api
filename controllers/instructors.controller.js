const queries = require('../queriesJS/instructors.sql');
const executeQuery = require('./executeQuery')

const getByProvided5Sessions = async (req, res) => {
    executeQuery(res, queries.getByProvided5Sessions);
};

const getByProvidedTrainingForFewSubdivision = async (req, res) => {
    executeQuery(res, queries.getByProvidedTrainingForFewSubdivision);
};

module.exports = {
    getByProvided5Sessions,
    getByProvidedTrainingForFewSubdivision
};