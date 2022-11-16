//File with post model/collection

//import the mongoose package
const mongoose = require('mongoose');

const Schema = mongoose.Schema

const postSchema = new Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdDate: { type: Date, required: true, default: Date.now },
  imageUrl: { type: String, required: true },
  likes: { type: Number, required: true },
  usersLiked: { type: Array, required: true },
});

//export of the model to be able to use it
module.exports = mongoose.model('Post', postSchema);