

const { pool } = require('../config/connection')

const addPost = ({ id,title, img_url, date }) =>{
   return  pool.query('INSERT INTO posts (user_id, title, post_img, post_date) VALUES ($1, $2, $3, $4)',[id,title, img_url, date])
   
}

module.exports = {
    addPost
}