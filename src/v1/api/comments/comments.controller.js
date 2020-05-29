const BlogpostModel = require('./blogposts.model')

const postBlog = async(req, res) => {

    try{
        const inputdata = req.body
        console.log({inputdata})

        const newPost = new BlogpostModel(inputdata)
        const savePost = await newPost.save()
        res.status(200).json({savePost})
    }catch(e){
        console.trace(e)
    }
}
//get all post
const getAllPost = async(req, res) =>{
    try{
        const searchQuery = {}
        const foundPosts = await BlogpostModel.find(searchQuery)
        res.status(200).json({allPosts: foundPosts})
    }catch(e){

    }
    
}

const getSingleUser = async(req, res) =>{
    try{
        const {userId} = req.params
        console.log(userId)
        const foundUser = await BlogpostModel.findOne({_id: userId}).select('-password')
        res.status(200).json({singleUser: foundUser})
    }catch(e){

    }
    
}

//update user
const updateUser = async(req, res) =>{
    try{
        const {userId} = req.params
        const inputdata = req.body
        let filter = {_id:userId}
        let selector = {$set: inputdata }
        const updateUser = await BlogpostModel.updateOne(filter, selector)
        res.status(200).json({data: updateUser})

    }catch(e){}
    
}

//delete user
const deleteUser = async (req, res) => {
    try {
    let {userId} = req.params
    const deletedUser = await BlogpostModel.deleteOne({_id: userId})
    res.status(200).json({message: 'User deleted successfully', data: deletedUser})
    } catch (e) {
    
    }
}


module.exports = {
    postBlog,
    getAllPost,
    getSingleUser,
    updateUser, 
    deleteUser
}
