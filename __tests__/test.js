const { pool } = require("../server/database/config/connection.js");
const { dbBuild } = require("../server/database/config/build");
const { getAllUsres } = require("../server/database/queries/getAllUsers.js");
const { addUser } = require("../server/database/queries/addUser.js");

beforeEach(() => dbBuild());
afterEach(() => pool.end());

test("jest is working", () => {
  expect(1).toBe(1);
});

test("test getUsers query", () => {
  getAllUsres()
    .then((rows) => {
      expect(Array.isArray(rows.rows)).toBe(true);
    })
    .catch((err) => console.log("server err"));
});

test("Testing the add user query", () => {
  return addUser({
    name: "momenqudaih",
    avatarInput: "https://api.dicebear.com/6.x/personas/svg?seed=Maggie",
    emailInput: "momen@gmail.com",
  })
    .then(({ rowCount, rows }) => expect(rows[0].name).toBe("momenqudaih"))
    .catch((err) => console.log(err));
});
