const UserModel = require('./users.model')

const register = async(req, res) => {

    try{
        const inputdata = req.body
        console.log({inputdata})

        const newUser = new UserModel(inputdata)
        const saveUsed = await newUser.save()
        res.status(200).json({saveUsed})
    }catch(e){
        console.trace(e)
    }
}
//get all users
const getAllUser = async(req, res) =>{
    try{
        const searchQuery = {}
        const foundUsers = await UserModel.find(searchQuery).select('-password')
        res.status(200).json({allUsers: foundUsers})
    }catch(e){

    }
    
}

const getSingleUser = async(req, res) =>{
    try{
        const {userId} = req.params
        console.log(userId)
        const foundUser = await UserModel.findOne({_id: userId}).select('-password')
        res.status(200).json({singleUser: foundUser})
    }catch(e){

    }
    
}

//update user
const updateUser = async(req, res) =>{
    try{
        const {userId} = req.params
        const {inputdata} = req.body
        let filter = {_id:userId}
        let selector = {$set: inputdata }
        const updated = await UserModel.updateOne(filter, selector)
        res.status(200).json({data: updateUser})

    }catch(e){}
    

}

module.exports = {
    register,
    getAllUser,
    getSingleUser,
    updateUser
}
