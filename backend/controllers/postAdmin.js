//This file will interact with the file that contains the model post : ../models/post
const Post = require("../models/post");
const mongoose = require('mongoose');
//file system: Module to access and interact with the file system
const fs = require('fs');

//MODIFY POST
exports.modifyPost = (req, res, next) => {
    console.log(req.params)
    let postObject = {};
    if (req.file) {
        postObject = {
            ...JSON.parse(req.body.post),
            imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
        };
    } else { postObject = { ...req.body } }
    Post.findOne({ _id: req.params.id, })
        .then(() => {
            Post.updateOne({ _id: req.params.id, },//envoyer l'id - front
                { ...postObject, _id: req.params.id, })
                .then(() => {
                    return res.status(201).json({ message: 'Post modifiée !' })
                })
                .catch((error) => { return res.status(400).json({ error: error }) });
        })
}