const mongoose = require('mongoose')
const bcrypt= require('bcrypt')
const User= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
    
    
})
User.statics.checkreg = async function(user1,pass){
if(user1===''||pass===''){
    throw new Error('all fields should be filled')
}



    const exists = await this.findOne({username:user1})
        if(exists!=null){
        throw Error("user already exists")
    }
    const salt = await bcrypt.genSalt(10)
    const hashed =await bcrypt.hash(pass,salt)
   

  const user =await this.create({username:user1,password:hashed}) 

  return user

}
User.statics.Checklog= async function(username,password){
   
    if(username===''||password===''){
        throw Error("fields cant be empty")
    }
    const user = await this.findOne({username:username})
    if(user==null){
     throw Error("user doesnt exist please register first")
    }
   console.log(username)
   const check = await bcrypt.compare(password,user.password)
   if(!check){
    throw Error("invalid creds")
   }
    return user
} 
module.exports=mongoose.model('User',User)