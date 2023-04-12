const { readFileSync } = require("fs");
const { join } = require("path");
const { pool } = require("./connection.js");

const createTablesQuery = readFileSync(join(__dirname, "build.sql"), "utf-8");
function buildDB() {
  try {
    pool.query(createTablesQuery);
  } catch (err) {
    console.log(err);
  }
}

buildDB();

module.exports = { buildDB };
