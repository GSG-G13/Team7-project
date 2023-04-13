const { getAllUsres } = require("../database/queries/index");
const { addUser } = require("../database/queries/index");
const { updateUserQuery } = require("../database/queries/index");
const { deleteUserQuery } = require("../database/queries/index");
const {comparePasswords} = require("../controller/comparePasswords")
const path = require("path");

exports.getUsers = (req, res) => {
  getAllUsres()
    .then((result) => {
      // console.log(result.rows);
      
      res.json(result.rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
};

exports.addUser = (req, res) => {
  addUser(req.body);
  res.redirect('/')
};

exports.updateUserQuery = (req, res) => {
  updateUserQuery(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(500).send("Internal Error"));
};

exports.deleteUserController = (req, res) => {
 

  deleteUserQuery(req.params.id)
    .then()
    .catch((err) => res.status(500).send(err));
};

exports.verifyUser = (req,res) => {
  const {username,password} = req.body;
  console.log(username,password,'from control');
comparePasswords(username,password,(err,res)=>{
  if (err) {
    console.log(err,'err');
  } else {
    console.log(res,'result');
  }
})
  
  // comparePasswords(username,password,(err,result)=>{
  //   if (err) {
  //     console.log(err,'klajdlfke');
  //   } else {
  //     if (result) {
  //       console.log(result,'eeee');
  //       console.log(result,'ldkfjdlkfj');
  //     } else {
  //       console.log(result,'ddd');
  //       console.log('not mathed');
  //     }
  //   }
  // })

}
