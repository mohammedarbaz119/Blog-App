import axios from 'axios'
import React, {  useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import style from '../css/login.css'
import {useUsercontext } from '../context/Usercontext'

export default function Register() {
  const [err,seterr] = useState(null)
  const {state,dispatch} = useUsercontext()
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
        axios.post('http://localhost:4000/user/register',{
        data
      }).then(res=>{if(res.status!==200){
        seterr(res.data.error)
        console.log(res.data)
      }
       else{ seterr(null)
  
        dispatch({type:"LOGIN",payload:res.data})
      nav('/')}}).catch(e=>seterr(e.message))
      // console.log(data)
    }}>
    <label className='il'>Username</label>
      <input className='ie' style={style.ie}type={'text'} value={formdata.username} name='username' onChange={(e)=>handch(e)}></input>
      <label className='il'>Password</label>
      <input className='ip' type={'password'} value={formdata.pass} name='pass' onChange={(e)=>handch(e)}></input>
      <input className='is' type={'submit'} value={'submit'} />
      <h3 style={{translate:'10px 50px'}}>Already have an account?<Link to={'/login'}>Login</Link></h3>
      {err&&<h2 className='err'>{err}</h2>}
      </form>
     
    </div>

  )
}
