const loadSql = require('./index');

module.exports = {
    getByProvidedInCertainCenter: loadSql('6.sql')
};