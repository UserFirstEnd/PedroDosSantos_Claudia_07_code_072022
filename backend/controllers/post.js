//This file will interact with the file that contains the model post : ../models/post
const Post = require("../models/post");
const mongoose = require('mongoose');
//file system: Module to access and interact with the file system
const fs = require('fs');

//SAUCE CREATION
exports.createPost = (req, res, next) => {
    const postObject = JSON.parse(req.body.post);
    console.log(req.body.post);
    //remove the ids given by the frontend, we need the id given by the database
    delete postObject._id;
    delete postObject._userId
    const post = new Post({
        ...postObject,
        imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
        likes: 0,
        dislikes: 0,
    });
    post.save()
        .then(() => { return res.status(201).json({ message: 'Post enregistré !' }) })
        .catch(error => { return res.status(400).json({ error: error }) })
};

//LIKE / DISLIKE POST
exports.likePost = (req, res, next) => {
    /*switch: evaluates the expressions and, depending on the associated case, 
    executes the corresponding instructions*/
    switch (req.body.like) {
        case 0:
            //the user who liked has already liked, if so remove 1 like
            Post.findOne({ _id: req.params.id })
                .then((post) => {
                    if (post.usersLiked.find(user => user === req.body.userId)) {
                        Post.updateOne({ _id: req.params.id }, {
                            //$inc : operator increments
                            $inc: { likes: -1 },
                            //$pull : operator removes
                            $pull: { usersLiked: req.body.userId },
                            _id: req.params.id
                        })
                            .then(() => {
                                return res.status(201).json({ message: '- 1 Like !' });
                            })
                            .catch((error) => {
                                return res.status(400).json({ error: error });
                            });
                    }
                })
            break;

        case 1:
            //+ 1 like
            Post.updateOne({ _id: req.params.id }, {
                $inc: { likes: 1 },
                //$push : returns an array of all values
                $push: { usersLiked: req.body.userId },
                _id: req.params.id
            })
                .then(() => {
                    res.status(201).json({ message: '+ 1 Like !' });
                })
                .catch((error) => {
                    res.status(400).json({ error: error });
                });
            break;
    }
};

//GET ALL POST'S
exports.getAllPost = (req, res, next) => {
    Post.find()
        .then(post => { return res.status(200).json(post) })
        .catch(error => { return res.status(400).json({ error: error }) });
};

//GET ONE POST
exports.getOnePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id })
        .then(post => { return res.status(200).json(post) })
        .catch(error => { return res.status(400).json({ error: error }) });
};

//MODIFY POST
exports.modifyPost = (req, res, next) => {
    let postObject = {};
    if (req.file) {
        postObject = {
            ...JSON.parse(req.body.post),
            imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
        };
    } else { postObject = { ...req.body } }
    delete postObject._userId;
    Post.findOne({ _id: req.params.id, })
        .then((post) => {
            if (post.userId != req.auth.userId) {
                return res.status(401).json({ message: 'User non-autorisé', });
            } else if (post.userId === req.auth.userId) {
                Post.updateOne({ _id: req.params.id, },//envoyer l'id - front
                    { ...postObject, _id: req.params.id, })
                    .then(() => {
                        return res.status(201).json({ message: 'Post modifiée !' })
                    })
                    .catch((error) => { return res.status(400).json({ error: error }) });
            }
        })
        .catch((error) => {
            return res.status(400).json({ error: error });
        });
};

/// DELETE ONE POST //
exports.deletePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id })
        .then(post => {
            const filename = post.imageUrl.split("/images/")[1];
            fs.unlink(`images/${filename}`, () => {
                Post.deleteOne({ _id: req.params.id })
                    .then(() => { return res.status(201).json({ message: 'Post supprimée  !' }) })
                    .catch(error => { return res.status(400).json({ error: error }) });
            });
        })
        .catch(error => { return res.status(500).json({ error: error }) });
};