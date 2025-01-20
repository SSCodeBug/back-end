// Added By Youssef
const express = require('express');
const router = express.Router();
const multer = require('multer');

const {addPost,getUserPosts,getPostById,getMyWordrobes,deleteImages} = require('../controllers/PostC');

const storage = multer.memoryStorage();  // Stocke les fichiers temporairement en mémoire
const upload = multer({ storage: storage }).array('images'); 
// Add a post
router.post('/posts', addPost);
// Get all posts of a user
router.get('/posts/user/:userId', getUserPosts);
// Get a post of a user
router.get('/posts/user/:userId/:postId', getPostById);

router.get('/posts/wordrobes/:userId', getMyWordrobes);
// Delete images
router.delete('/posts/images/:userId', deleteImages);

module.exports = router;
