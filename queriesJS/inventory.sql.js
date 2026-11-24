const loadSql = require('./index');

module.exports = {
    getProvidedInventory: loadSql('9.sql')
};