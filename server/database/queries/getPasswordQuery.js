const {pool} = require('../config/connection');
const compareQuery = (email) => {
return pool.query('SELECT password FROM users WHERE email = $1',[email]);
};


module.exports = {compareQuery}