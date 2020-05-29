const express = require('express')

const BlogPostsController = require('./blogposts.controller')

const router = express.Router()

router.post('/postBlog', BlogPostsController.postBlog)
router.get('/getUsers', UserController.getAllUser)
router.get('/getSingleUser/:userId', UserController.getSingleUser)
router.put('/updateSingleUser/:userId', UserController.updateUser)
router.delete('/deleteUser/:userId', UserController.deleteUser)


module.exports = router
