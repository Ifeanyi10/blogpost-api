const express = require('express')
const router = require('../v1/api/Users')
const bodyParser = require('body-parser')

const {connect} = require('../config/mongoose')

connect()

let server = express()

server.use(bodyParser.json())

let port = 4000
let name = 'Ifeanyi'



server.use('/api/v1', router)

server.listen(port, ()  => {
    console.log('Nodejs server running on port ' + port)
})

//install express and  call the dependency.