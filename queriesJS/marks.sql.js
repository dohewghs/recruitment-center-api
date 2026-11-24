const loadSql = require('./index');

module.exports = {
    getAvgMarkForInstructor: loadSql('8.sql')
};