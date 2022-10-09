//File with post model/collection

//import the mongoose package
const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  //like: { type: Number, required: true },
  //dislike: { type: Number, required: true },
  usersLiked: { type: Array, required: true },
  usersDisliked: { type: Array, required: true },
});

//export of the model to be able to use it
module.exports = mongoose.model('Post', postSchema);