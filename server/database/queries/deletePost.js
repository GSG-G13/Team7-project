const { pool } = require('../config/connection')

const deletePost = (id,user_id)=>{
    return pool.query('DELETE FROM posts WHERE id = $1 And user_id = ($2,1) RETURNING *',[id, user_id])
}

module.exports = {deletePost}