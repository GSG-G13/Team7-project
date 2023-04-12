

const { pool } = require("../config/connection");
const {hashingFun} = require('../../controller/hashing');


const addUser = (userData) => {
  const { name, avatarInput, emailInput, password, role, mobile } = userData;
  let hashedPassword;
  hashingFun(password,(err,hashedpass)=>{
    if (err){
      console.log(err);
    } else {
      hashedPassword = hashedpass;
    }
  });
  
  return pool.query(
    
    "INSERT INTO users (name, img_url, email, password, role, mobile) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    [name, avatarInput, emailInput, hashedPassword, role, mobile]
  );
};

module.exports = {
  addUser,
};
