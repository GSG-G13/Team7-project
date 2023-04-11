

const { pool } = require('../config/connection')

const getAllPosts = ()=>{
    return pool.query('SELECT users.img_url, users.name, posts.post_img, posts.title, posts.post_date FROM posts JOIN users ON posts.user_id = users.id')
}

module.exports = { 
    
    getAllPosts
}