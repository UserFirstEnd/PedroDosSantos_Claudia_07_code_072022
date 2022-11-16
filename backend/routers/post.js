const express = require('express');

//reuse authentication part code of REST server
const router = express.Router();

const postCtrl = require('../controllers/post');

const adminPostCtrl = require('../controllers/postAdmin');

//middleware aut to secure routes
const auth = require('../middleware/auth');
//multer middleware to manage images
const multer = require('../middleware/multer-config');

//CRUD
router.post('/', auth, multer, postCtrl.createPost);
router.post("/:id/like", auth, postCtrl.likePost);
router.get('/', auth, postCtrl.getAllPost);
router.get('/:id', auth, postCtrl.getOnePost);
router.put('/:id', auth, multer, postCtrl.modifyPost);
router.delete('/:id', auth, postCtrl.deletePost);

//CRUD ADMIN
router.put('/admin/:id', auth, multer, adminPostCtrl.modifyPost);

module.exports = router;