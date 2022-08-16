const express = require('express');

//reuse authentication part code of REST server
const router = express.Router();

const postCtrl = require('../controllers/post');

//middleware aut to secure routes
const auth = require('../middleware/auth');
//multer middleware to manage images
const multer = require('../middleware/multer-config');

//CRUD
router.post('/', /*auth,multer,*/  postCtrl.createPost);
router.post("/:id/like", auth, postCtrl.likePost);
router.get('/', /*auth,*/ postCtrl.getAllPost);
router.get('/:id', /*auth,*/ postCtrl.getOnePost);
router.put('/:id', auth, multer, postCtrl.modifyPost);
router.delete('/:id', auth, postCtrl.deletePost);

module.exports = router;