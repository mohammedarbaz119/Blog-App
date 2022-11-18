import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate} from 'react-router'
import { Link } from 'react-router-dom'
import style from './login.css'
import { useUsercontext } from './Usercontext'


export default function Login() {
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
    <div className='bodylog'>
    <form className='if' onSubmit={(e)=>{
      e.preventDefault()
      const data = {username:formdata.username,pass:formdata.pass}
        axios.post('http://localhost:4000/user/login',{
        data
      }).then(res=>{if(res.status!==200){
        seterr(res.data.error)
        console.log(res.data)
      }
       else{ seterr(null)
  
        dispatch({type:"LOGIN",payload:res.data})
        console.log(res.data)
      nav('/')}}).catch(e=>seterr(e.message))
    }}>
    <label className='il'>Username</label>
      <input className='ie' style={style.ie}type={'text'} value={formdata.username} name='username' onChange={(e)=>handch(e)}></input>
      <label className='il'>Password</label>
      <input className='ip' type={'password'} value={formdata.pass} name='pass' onChange={(e)=>handch(e)}></input>
      <input className='is' type={'submit'} value={'submit'} />
      <h3 style={{translate:'10px 50px'}}>New here? <Link to={'/register'}>Register</Link></h3>
      {err&&<h2 className='err'>{err}</h2>}
      </form>
    </div>

  )
}
