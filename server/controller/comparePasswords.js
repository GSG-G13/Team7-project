const bcrypt = require('bcrypt');
const {compareQuery} = require('../database/queries/getPasswordQuery');

const comparePasswords = (username,password,cb) => {
    
   return compareQuery(username).then(result=> result.rows[0].password).then(dbPassword=>bcrypt.compare(password,dbPassword,cb)).catch(err=>console.log(err));
    
    
}

module.exports = {
    comparePasswords
}
