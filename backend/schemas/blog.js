const mongoose = require('mongoose')
const User = require('./User')
let count =0;
const Blog = new mongoose.Schema(
    {
        id:{
            type:Date,
            default:()=>new Date()
        },
        title:String,
        body:String,
        poster:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            autopopulate: true
        }
    }
)
Blog.plugin(require('mongoose-autopopulate'))
module.exports=mongoose.model('Blog',Blog)