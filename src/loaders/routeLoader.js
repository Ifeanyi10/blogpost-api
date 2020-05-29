const express = require('express')

const userRoute = require('../v1/api/Users')
const blogpostRoute = require('../v1/api/blogposts')

const apiRouter = express.Router()

apiRouter.use('/users', userRoute)
apiRouter.use('/posts', blogpostRoute)

module.exports = apiRouter
