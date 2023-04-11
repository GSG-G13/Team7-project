

const { pool } = require("../config/connection");

const updateUserQuery = ({ id, name, email, avatarInput }) => {
  return pool.query(
    "UPDATE users SET name = $1, email = $2, img_url = $3 WHERE id = $4 RETURNING *",
    
    [name, email, avatarInput, id]
  );
};

module.exports = { updateUserQuery };
