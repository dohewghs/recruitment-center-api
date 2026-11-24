const loadSql = require('./index');

module.exports = {
    getByMaxRecruitCount: loadSql('4.sql'),
    getBySomeTrainings: loadSql('7.sql'),
    getByMaxAvgMarks: loadSql('13.sql')
};