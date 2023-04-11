
require('dotenv').config();
const { pool } = require("../config/connection");
const {hashingFun} = require('../../controller/hashing');
const cookie = require('cookie-signature')

const key = process.env.PSC

const addUser = (userData) => {
  const { name, avatarInput, emailInput, password, role, mobile } = userData;
  console.log(name, avatarInput, emailInput, password, role, mobile,'------------');
  let hashedPassword;
   hashingFun(password,key).then(result => hashedPassword = result).catch(err => console.log(err));

  
  return pool.query(
    
    "INSERT INTO users (name, img_url, email, password, role, mobile) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    [name, avatarInput, emailInput, hashedPassword, role, mobile]
  );
};

module.exports = {
  addUser,
};
