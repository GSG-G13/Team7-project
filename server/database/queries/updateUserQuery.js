

const { pool } = require("../config/connection");

const updateUserQuery = ({ id, name, email, avatarInput, mobile, role }) => {
  return pool.query(
    "UPDATE users SET name = $1, email = $2, img_url = $3, mobile= $4, role= $5  WHERE id = $6 RETURNING *",
    
    [name, email, avatarInput, mobile, role, id]
  );
};

module.exports = { updateUserQuery };
