const express = require('express')
const bodyParser = require('body-parser')

const {connect} = require('./config')

connect()

let server = express()
let router = express.Router()

server.use(bodyParser.json())

let port = 4000
let name = 'Ifeanyi'

function welcome(req, res){
    res.status(200).json('Welcome '+name+', this is nodejs class')

}


function login(req, res){
    
    let username = req.body.username
    let email = req.body.email
    console.log({username})

    res.status(200).json({username, email})
}

router.get('/welcome', welcome)
router.post('/login', login)

server.use('/api/v1', router)

server.listen(port, ()  => {
    console.log('Nodejs server running on port ' + port)
})

//install express and  call the dependency.