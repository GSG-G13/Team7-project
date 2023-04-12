require("dotenv").config();
const key = process.env.SECRET_KEY;


const express = require("express");

const router = express.Router();

const users = require("./users");

const posts = require("./posts");




router.get("/posts", posts.getPosts);

router.get("/hh", users.getUsers);

router.post("/users", users.addUser);

router.put("/users", users.updateUserQuery);

router.post('/login',users.verifyUser);
router.post('/search', posts.searchForPost)



router.delete("/users/:id", users.deleteUserController);

router.post("/posts", posts.addPostFunc);

// cookie

const jwt = require("jsonwebtoken");
const loginSchema = require("../utilis/validation/loginSchema");
const error = require("./error");

router.post("/login", (req, res) => {
  const { userName, pasWord } = req.body;
  //   console.log(userName, "name");
  //   console.log(pasWord, "pass");
  //   console.log(req.body);

  const { error, value } = loginSchema.validate(
    { userName, pasWord },
    { abortEarly: false }
  );
  if (error) {
    res.status(400).redirect("/users/login.html");
  } else {
    const token = jwt.sign({ userName, pasWord, logged: true }, "bbb");
    res.cookie("logged", token, { httpOnly: true }).redirect("/");
  }
});

router.use(error.client);
router.use(error.server);

module.exports = router;
