

const { getAllPosts } = require('../database/queries/index')
const { addPost } = require('../database/queries/index')
const { searchPost } = require('../database/queries/postSearch')
const postSchema = require("../utilis/validation/postSchema");
const { deletePost } = require('../database/queries/index')
exports.getPosts = (req, res) => {
    getAllPosts()
        .then(result => res.json(result.rows))
        .catch(err => res.status(500).send('Internal Server Error'))
}

exports.addPostFunc = (req, res) => {

    addPost(req.body)
        .then(
            (data) => {
                //console.log(json(data.rows,'_______________________'));
                res.status(201).json(data.rows[0])
            }
        )
        .catch((err) => res.status(502).send(err));
}

exports.searchForPost = (req, res) => {
    searchPost(req.body)
        .then((data) => {
            res.json(data.rows)
        })
        .catch(err => res.status(500).send('Internal Server Error'))
}

exports.delete = (req,res)=>{
    const { id, user_id } = req.params
    deletePost(id, user_id)
    .then(data => data.json())
    .then((data)=>{
        res.status(203).json(data.rows)
    }).catch(err => res.send(err))
}
