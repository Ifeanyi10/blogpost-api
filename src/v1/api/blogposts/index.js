const express = require('express')

const BlogPostsController = require('./blogposts.controller')

const router = express.Router()

router.post('/postBlog', BlogPostsController.postBlog)
router.get('/getAllPost', BlogPostsController.getAllPost)
//router.get('/getSingleUser/:userId', UserController.getSingleUser)
//router.put('/blogpost/:userId', UserController.updateUser)
//router.delete('/deleteUser/:userId', UserController.deleteUser)


module.exports = router
