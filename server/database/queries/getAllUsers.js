

const { pool } = require('../config/connection')

const getAllUsres = ()=>{
    return pool.query('SELECT * FROM users ORDER BY id')
    
}

module.exports = { getAllUsres }