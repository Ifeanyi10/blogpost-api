const mongoose = require('mongoose')

let  Schema = mongoose.Schema

//let roles = ['guest', 'admin', 'moderator']

const blogpostSchema = new Schema(
    {
        title: {type: String},
        content: {type: String},
        comments: [{type: Schema.ObjectId, ref: 'Comments'}]
    }
)

module.exports = mongoose.model("BlogPosts", blogpostSchema)