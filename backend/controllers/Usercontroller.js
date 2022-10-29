const User = require("../schemas/User")

async function LoginUser(req,res){
    
    try{const {data} = req.body
    // console.log({user:data.username,pass:data.pass})
    const user= await User.findOne({username:data.username,password:data.pass})
    if(user){ res.json(user)
    }
   else{
    res.json({message:"invalid creds"})
   }
    }
    catch(err){
        res.send(err)
    }
    
   
    // console.log({username,pass})
    // res.json({username,pass})
}
async function Register(req,res){
    try{
    const {data} = req.body
    const userf = await User.checkreg(data.username,data.pass)
    
    res.json(userf)
}
    catch(err){
        res.send(err)
    }
    // console.log({username,pass})
    // res.json({username,pass})
}


module.exports={LoginUser,Register}