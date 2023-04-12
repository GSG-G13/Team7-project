const { pool } = require('../config/connection');


function searchPost(searchTrem){
    const { searchTerm } = searchTrem

    return pool.query('SELECT * FROM posts WHERE title ILIKE $1',[`%${searchTerm}%`])

// return pool.query (
//     'SELECT * FROM posts WHERE title ILIKE $1 ',
//     [term]
// )

}
module.exports = {searchPost};