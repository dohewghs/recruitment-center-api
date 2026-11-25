const loadSql = require('./index');

module.exports = {
    getByProvidedInCertainCenter_n: loadSql('6_name.sql'),
    getByProvidedInCertainCenter_id: loadSql('6_id.sql')
};