const loadSql = require('./index');

module.exports = {
    getByProvided5Sessions: loadSql('2.sql'),
    getByProvidedTrainingForFewSubdivision: loadSql('14.sql')
};