const express = require('express')

const BlogPostsController = require('./blogposts.controller')

const router = express.Router()

router.post('/postBlog', BlogPostsController.postBlog)
router.get('/getAllPost', BlogPostsController.getAllPost)
router.get('/getSinglePost/:postId', BlogPostsController.getSinglePost)
router.put('/updatePost/:postId', BlogPostsController.updatePost)
//router.put('/blogpost/:userId', UserController.updateUser)
router.delete('/deletePost/:postId', BlogPostsController.deletePost)


module.exports = router
