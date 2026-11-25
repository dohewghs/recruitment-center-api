const queries = require('../queriesJS/inventory.sql');
const executeQuery = require('./executeQuery');

const getProvidedInventory = async (req, res) => {
    executeQuery(res, queries.getProvidedInventory);
};

module.exports = { 
    getProvidedInventory
};