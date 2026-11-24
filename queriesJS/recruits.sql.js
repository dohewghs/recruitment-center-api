const loadSql = require('./index');

module.exports = {
    getByAppointmentDate: loadSql('1.sql'),
    getMin3Courses: loadSql('3.sql'),
    getByMaxMark: loadSql('5.sql'),
    getThatInFewSubdivision: loadSql('10.sql'),
    getByMaxTrainingCount: loadSql('12.sql'),
    getByNMissedSessions: loadSql('16.sql')
};