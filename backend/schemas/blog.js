const mongoose = require('mongoose')
const Blog = new mongoose.Schema(
    {
        username:String,
        id:{
            type:Date,
            default:()=>Date.now()
        },
        name:String,
        body:String,
        author:String
    }
)
module.exports=mongoose.model('Blog',Blog)