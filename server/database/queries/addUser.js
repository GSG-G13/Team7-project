

const { pool } = require("../config/connection");

const addUser = (userData) => {
  const { name, avatarInput, emailInput } = userData;
  return pool.query(
    
    "INSERT INTO users (name, img_url, email) VALUES ($1, $2, $3) RETURNING *",
    [name, avatarInput, emailInput]
  );
};

module.exports = {
  addUser,
};
