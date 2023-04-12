require("dotenv").config();
const { Pool } = require("pg");

// let dbUrl = "";

// if (process.env.NODE_ENV === "test") {
//   dbUrl = process.env.DEV_DB_URL;
// } else {
//   dbUrl = process.env.DEV_DB_URL;
// }

let ssl = false;
let dbUrl = "";
const { NODE_ENV, DATABASE_URL, DEV_DB_URL, TEST_DB_URL } = process.env;
switch (NODE_ENV) {
  case "production":
    dbUrl = DATABASE_URL;
    ssl = { rejectUnauthorized: false };
    break;
  case "development":
    dbUrl = DEV_DB_URL;
    break;
  case "testing":
    dbUrl = TEST_DB_URL;
    break;
  default:
    throw new Error("undifind database url");
}

if (!dbUrl) throw new Error("No Database URL!!!");

const pool = new Pool({
  connectionString: dbUrl,
  ssl: ssl,
});

module.exports = {
  pool,
};
