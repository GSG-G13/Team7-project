const bcrypt = require('bcrypt');
const {compareQuery} = require('../database/queries/getPasswordQuery');

const comparePasswords = (email,password,cb) => {
    let dbHash;
    compareQuery(email).then(dbPass=>dbHash=dbPass)
    bcrypt.compare(password,dbHash,cb);  
}

module.exports = {
    comparePasswords
}