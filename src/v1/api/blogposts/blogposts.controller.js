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

const commentAPostByUser = async (req, res) => {
    try {
        let inputData = req.body
        let {blogpostId} = req.params
         let filter = {_id: blogpostId }
         let selector = {$push: {comments: inputData}}
        const commentByUser = await BlogpostModel.updateOne({filter, selector})
        res.status(200).json({data: commentByUser})
    } catch (e) {
    
    }

}


//get single post
const getSinglePost = async(req, res) =>{
    try{
        const {postId} = req.params
        console.log(postId)
        const foundPost = await BlogpostModel.findOne({_id: postId})
        res.status(200).json({singlePost: foundPost})
    }catch(e){

    }
    
}

//update post
const updatePost = async(req, res) =>{
    try{
        const {postId} = req.params
        const inputdata = req.body
        let filter = {_id:postId}
        let selector = {$set: inputdata }
        const updatePost = await BlogpostModel.updateOne(filter, selector)
        res.status(200).json({data: updatePost})

    }catch(e){}
    
}

//delete user
const deletePost = async (req, res) => {
    try {
    let {postId} = req.params
    const deletedPost = await BlogpostModel.deleteOne({_id: postId})
    res.status(200).json({message: 'Post deleted successfully', data: deletedPost})
    } catch (e) {
    
    }
}


module.exports = {
    postBlog,
    getAllPost,
    commentAPostByUser, 
    getSinglePost,
    updatePost, 
    deletePost
}
