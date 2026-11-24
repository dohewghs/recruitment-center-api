const fs = require('fs');
const path = require('path');

const loadSql = (fileName) => {
  const filePath = path.join(__dirname, '../queriesSQL', fileName);
  return fs.readFileSync(filePath, 'utf-8');
};