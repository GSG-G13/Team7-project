

const { pool } = require("../config/connection");
const {hashingFun} = require('../../controller/hashing');
const { keys } = require("../../utilis/validation/postSchema");
require('dotenv').config();
const key = process.env.SECRET_KEY

const addUser = (userData) => {
  const { name, avatarInput, emailInput, password, role, mobile } = userData;
  const hashedPassword = hashingFun(password,key);
  
  return pool.query(
    
    "INSERT INTO users (name, img_url, email, password, role, mobile) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    [name, avatarInput, emailInput, hashedPassword, role, mobile]
  );
};

module.exports = {
  addUser,
};
