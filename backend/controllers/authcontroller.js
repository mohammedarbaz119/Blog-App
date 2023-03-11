const jwt = require('jsonwebtoken')
const User = require('../schemas/User')

function Userauth(req,res,next){
    const {authorization} = req.headers
console.log(req.headers)
    if(!authorization){
        res.status(400).json({error:"token nhi hai ya user ich nhi hai tum"})
    }
    const token = authorization.split(' ')[1]
    try{
    const {_id} =jwt.verify(token,process.env.SECRET_CODE)
    const user = User.findById(_id).select('_id')
req.idd=user
    next()
    }
    catch(error){
        res.status(400).json({error:"token galat hai ya expired"})
    }
    
}
module.exports=Userauth