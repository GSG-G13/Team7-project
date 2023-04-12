const {pool} = require('../config/connection');
const compareQuery = (username) => {
return pool.query('SELECT password FROM users WHERE name = $1',[username]);
};

module.exports = {compareQuery}