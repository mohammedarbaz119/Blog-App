const User = require("../schemas/User")
const jwt = require('jsonwebtoken')
require('dotenv').config();

const createToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET_CODE,{expiresIn:'3d'})
}
async function LoginUser(req, res) {

    try {
        const { data } = req.body
        // console.log({user:data.username,pass:data.pass})
        const user = await User.findOne({ username: data.username, password: data.pass })
        if (user) {
            res.json(user)
        }
        else {
            res.json({ message: "invalid creds" })
        }
    }
    catch (err) {
        res.send(err)
    }


    // console.log({username,pass})
    // res.json({username,pass})
}
async function Register(req, res) {
    try {
        const { data } = req.body
        const userf = await User.checkreg(data.username, data.pass)
        const token = createToken(userf._id)
        return res.status(200).json({username:data.username,token})
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
    // console.log({username,pass})
    // res.json({username,pass})
}


module.exports = { LoginUser, Register }