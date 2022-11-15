const express = require('express')
let cors = require('cors')
require('dotenv').config();

const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/arbaz")
const Blog = require('./schemas/blog')
const User = require('./schemas/User')
const userRouter = require('./Routes/Userrouter')
const app = express()
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
const connect = mongoose.connection

if(connect){
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
app.post('/blog/new',async(req,res)=>{
    const {blog} = req.body
    const newBlog = new Blog({name:blog.name,body:blog.body,author:blog.author})
try{
    const result = await newBlog.save()
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