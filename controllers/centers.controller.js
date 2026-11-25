const queries = require('../queriesJS/centers.sql');
const executeQuery = require('./executeQuery');

const getByProvidedForLastYear = async (req, res) => {
    executeQuery(res, queries.getByProvidedForLastYear);
};

const getByProvidedMaxEquipment = async (req, res) => {
    executeQuery(res, queries.getByProvidedMaxEquipment);
};

module.exports = {
    getByProvidedForLastYear,
    getByProvidedMaxEquipment
};