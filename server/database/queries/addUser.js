
require('dotenv').config();
const { pool } = require("../config/connection");
const {hashingFun} = require('../../controller/hashing');


const addUser = (userData) => {
  const { name, avatarInput, emailInput, password, role, mobile } = userData;
  console.log('test');
  hashingFun(password,(err,hashedpass)=>{
    if (err){
      console.log(err);
    } else {
    console.log(hashedpass,'hashed from query***********************');
   return pool.query(
     
     "INSERT INTO users (name, img_url, email, password, role, mobile) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
     [name, avatarInput, emailInput, hashedpass, role, mobile]
   ).then(result=>console.log(result.rows,'frm inside'));
    }
  
  });
  console.log('tst final');
};

module.exports = {
  addUser,
};
