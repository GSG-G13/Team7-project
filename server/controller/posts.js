

const { getAllPosts } = require('../database/queries/index')
const { addPost } = require('../database/queries/index')

exports.getPosts = (req,res) => {
    getAllPosts()
    .then(result => res.json(result.rows))
    .catch(err => res.status(500).send('Internal Server Error'))
}

exports.addPostFunc = (req,res) => {
    console.log(req.body);
    addPost(req.body)
    .then((data) => {
        res.send(data.rows.json())
      })
      .catch((err) => res.status(500).send(err));
}
