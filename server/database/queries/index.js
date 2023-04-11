

const { getAllUsres } = require("./getAllUsers");
const { getAllPosts } = require("./getAllPosts");
const { addUser } = require("./addUser");
const { updateUserQuery } = require("./updateUserQuery");

const { deleteUserQuery } = require("./deleteUserQuery");
const { addPost } = require('./addPost')

module.exports = {
  getAllUsres,
  getAllPosts,
  addUser,
  updateUserQuery,
  deleteUserQuery,
  addPost
};
