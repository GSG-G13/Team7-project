const bcrypt = require('bcrypt');
const {compareQuery} = require('../database/queries/getPasswordQuery');

const comparePasswords = (user,pass,cb) => {
    console.log(user,pass,'inside');
//     console.log('dldd');
compareQuery(user).then(result=> result.rows[0].password).then(dbPassword=>bcrypt.compare(pass,dbPassword,cb)).catch(err=>console.log(err));
console.log('after query');
//     // 
    
}

module.exports = {
    comparePasswords
}
