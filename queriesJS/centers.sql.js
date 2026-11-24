const loadSql = require('./index');

module.exports = {
    getByProvidedForLastYear: loadSql('11.sql'),
    getByProvidedMaxEquipment: loadSql('15.sql')
};