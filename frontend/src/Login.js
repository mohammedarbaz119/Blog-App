import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate} from 'react-router'
import { Link } from 'react-router-dom'
import style from './login.css'
import { Usercontext } from './Usercontext'

export default function Login() {
  const {user,setuser} = useContext(Usercontext)
 const nav=useNavigate()
 const [formdata,setdta] = useState({
  username:"",
  pass:""
 })
 const handch=(e)=>{
  const {name,value}= e.target;
  setdta(prev=>{
    return {
      ...prev,
      [name]:value
    }
  })
 
 }
  return (
    <div>
    <form className='if' onSubmit={(e)=>{
      e.preventDefault()
      const data = {username:formdata.username,pass:formdata.pass}
        axios.post('http://localhost:4000/user/login',{
        data
      }).then(res=>{if(res) {setuser(res.data.username)
        nav('/')
        
      }
         else{
        alert("not a good login")
      }}).catch(e=>console.log(e))
      console.log(data)
    }}>
    <label className='il'>Username</label>
      <input className='ie' style={style.ie}type={'text'} value={formdata.username} name='username' onChange={(e)=>handch(e)}></input>
      <label className='il'>Password</label>
      <input className='ip' type={'password'} value={formdata.pass} name='pass' onChange={(e)=>handch(e)}></input>
      <input className='is' type={'submit'} value={'submit'} />
      <h3 style={{translate:'10px 50px'}}>New here? <Link to={'/register'}>Register</Link></h3>
      </form>
    </div>

  )
}
