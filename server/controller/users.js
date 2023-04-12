const { getAllUsres } = require("../database/queries/index");
const { addUser } = require("../database/queries/index");
const { updateUserQuery } = require("../database/queries/index");
const { deleteUserQuery } = require("../database/queries/index");
const {comparePasswords} = require("../controller/comparePasswords");

const path = require("path");

exports.getUsers = (req, res) => {
  getAllUsres()
    .then((result) => {
      console.log(result.rows);
      res.json(result.rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
};

exports.addUser = (req, res) => {
  addUser(req.body)
    .then((data) => {
      res.json(data.rows);
    })
    .catch((err) => res.status(500).send("Internal Error"));
};

exports.updateUserQuery = (req, res) => {
  updateUserQuery(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(500).send("Internal Error"));
};

exports.deleteUserController = (req, res) => {
  // console.log(req.params.id);

  deleteUserQuery(req.params.id)
    .then()
    .catch((err) => res.status(500).send(err));
};

exports.verifyUser = (req,res) => {
  const {email,password} = req.body;
  comparePasswords(email,password,(err,result)=>{
    if (err) {
      console.log(err);
    } else {
      if (result) {
        // if match 
      } else {
        // if not match
      }
    }
  })

}