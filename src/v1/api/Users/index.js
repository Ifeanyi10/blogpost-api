const express = require('express')

const UserController = require('./users.controller')

const router = express.Router()

router.post('/register', UserController.register)
router.get('/getUsers', UserController.getAllUser)
router.get('/getSingleUser/:userId', UserController.getSingleUser)
router.put('/updateSingleUser/:userId', UserController.updateUser)
router.delete('/deleteUser/:userId', UserController.deleteUser)


module.exports = router
