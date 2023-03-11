const express = require('express')
let cors = require('cors')
require('dotenv').config({path:'./.env'});
const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/arbaz")
const Blog = require('./schemas/blog')
const User = require('./schemas/User')
const userRouter = require('./Routes/Userrouter')
const app = express()
const Userauth = require('./controllers/authcontroller')
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
const connect = mongoose.connection

if(connect){
    console.log(connect)
    app.listen(4000,()=>{
        console.log("i run")
    })
}
const products = [
    {id:1,name:"laptop",rate:5},
    {id:2,name:"car",rate:4},
    {id:3,name:"puchi",rate:10} 
]
app.get('/products',(req,res)=>{
    res.json(products)
})
app.get('/products/:id',(req,res)=>{
    const {id} = req.params
    
    const newarr = products.filter(l=>l.id===Number(id))
    res.json({payload:newarr})
})
// app.post('/login',(req,res)=>{
//     const {data} = req.body
//     console.log({user:data.username,pass:data.pass})
//     // console.log({username,pass})
//     // res.json({username,pass})
// })
// app.post('/register',(req,res)=>{
//     const {data} = req.body
//     console.log({user:data.username,pass:data.pass})
// })
app.use('/user',userRouter)
app.post('/blog/new',Userauth,async(req,res)=>{
    const {blog} = req.body
   
try{

    const authorid = await User.findOne({username:blog.author}).select('_id')
    const newBlog = new Blog({title:blog.title,body:blog.body,poster:authorid})
    console.log(newBlog)
  
    const result = await newBlog.save()
    await Blog.findOne({poster:authorid}).populate('poster').exec((err,res)=>{
        if(err){
         console.log(err.stack)
        }
        else{
            console.log(res)
        }

    })
    // if(!newBlog.populated('users')){
    //     newBlog.populate('users').catch(e=>res.json({err:"cant populate"}))
    // }
    return res.status(200).json({success:"Blog saved to DB"})
}
catch(err){
    res.status(400).send("cant save to DB")
}


})

app.get('/blogs',async(req,res)=>{
    try{
    const Blogs = await Blog.find({})
    const Blogsarr = [...Blogs]
    return res.json(Blogsarr)
    }
    catch(err){
        res.status(400).send("cant fetch")
    }
})
app.get('/blogs/:id',async(req,res)=>{
    try{
    const {id} = req.params;
    const thesingleblog = await Blog.findOne({id:id})
    return res.json([thesingleblog])
    }
    catch(err){
res.status(400).send(err)
    }
})