
require('dotenv').config();
const { pool } = require("../config/connection");
const {hashingFun} = require('../../controller/hashing');
const cookie = require('cookie-signature')

const key = process.env.PSC

const addUser = (userData) => {
  const { name, avatarInput, emailInput, password, role, mobile } = userData;
  let hashedPassword;
   hashingFun(password,key)
   .then(result => {
    console.log(result,'000000000000');
    hashedPassword = result
  }).catch(err => console.log(err));

  console.log(hashedPassword);
  return pool.query(
    
    "INSERT INTO users (name, img_url, email, password, role, mobile) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    [name, avatarInput, emailInput, password, role, mobile]
  );
};

module.exports = {
  addUser,
};
