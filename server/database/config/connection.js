require("dotenv").config();
const { Pool } = require("pg");

let dbUrl = "";

if (process.env.NODE_ENV === "test") {
  
  dbUrl = process.env.TEST_DB_URL;
} else {
  dbUrl = process.env.DB_URL;
}

if (!dbUrl) throw new Error("No Database URL!!!");

const pool = new Pool({
  connectionString: dbUrl,
  ssl: process.env.NODE_ENV == 'test' ? false : true,
});

module.exports = {
  pool,
};
