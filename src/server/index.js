const express = require('express')
const bodyParser = require('body-parser')

const {connect} = require('../config/mongoose')
const routerLoader = require('../loaders/routeLoader')

connect()

let server = express()

let port = 4000

server.use(bodyParser.json())

server.use('/api/v1', routerLoader)

server.listen(port, ()  => {
    console.log('Nodejs server running on port ' + port)
})

//install express and  call the dependency.