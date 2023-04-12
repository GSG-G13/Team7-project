require('dotenv').config();
const key = process.env.SECRET_KEY


const express = require("express");

const router = express.Router();

const users = require("./users");

const posts = require("./posts");




router.get("/posts", posts.getPosts);

router.get("/hh", users.getUsers);

router.post("/users", users.addUser);

router.put("/users", users.updateUserQuery);

router.post('/login',users.verifyUser);



router.delete("/users/:id", users.deleteUserController);

router.post('/posts', posts.addPostFunc)

module.exports = router;
