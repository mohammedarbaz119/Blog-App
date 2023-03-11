import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/new.css'
import { useUsercontext } from '../context/Usercontext'

export default function Navbar() {
 
const {state:state,dispatch:dispatch}=  useUsercontext()
const [useris,setuseris] = useState(false)
const nav = useNavigate()
const handlee =()=>{
  dispatch({type:"LOGOUT"})
  nav('/login')
}
useEffect(() => {
  let usr = JSON.parse(localStorage.getItem('user'))
  if(usr!==null&&!state){
    dispatch({type: "LOGIN", payload: usr})
  }
  if(state){
console.log(state.username)
  }
 
}, [])

useEffect(() => {
 if(state){
  console.log(state.username)
 }
}, [state])
  return (
    <nav style= {{position:'sticky',top:'0px',zIndex:'10'}}>
      <div className='Main'>
<h1 style={{'color':"white",padding:'10px'}}>{'Blogs app'}</h1>
{state&&<h1>welcome {state.user.username}</h1>}
<div className='links'>
   {state&&<Link to={'/blogs'} style={{color:'white',marginRight:'30px'}}>Blogs</Link>}
   {state&& <Link to={'/'} style={{color:'white',marginRight:'30px'}}>Home</Link>}
   {!state&& <Link to={'/register'} style={{color:'white',marginRight:'30px'}}>Register</Link>}
   {state?<button className='ab' style={{fontSize:'17px',color:'white',backgroundColor:'#21222A',margin:'10px', border:'none'}} onClick={handlee}>Logout</button>:<Link to={'/login'} style={{marginRight:"20px",color:'white'}}>Login</Link>}
  {state&& <Link to={'/blog/new'} style={{marginRight:"20px",color:'white'}}>New blog</Link>}
</div>
      </div>
    </nav>
  )
}
