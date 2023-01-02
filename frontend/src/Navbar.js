import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './new.css'
import { useUsercontext } from './Usercontext'

export default function Navbar() {
  const nav = useNavigate()
const {state,dispatch}=  useUsercontext()
const [useris,setuseris] = useState(()=>localStorage.getItem("user")?true:false)
if(state!=null){
  console.log(state.username)
}
const handlee =()=>{
  dispatch({type:"LOGOUT"})
  nav('/')
  
}
useEffect(()=>{
console.log("ocjeue")
},[state])
  return (
    <nav style= {{position:'sticky',top:'0px',zIndex:'10'}}>
      <div className='Main'>
<h1 style={{'color':"white",padding:'10px'}}>{'Blogs app'}</h1>
{state&&<h1>welcome {JSON.parse(localStorage.getItem("user")).username}</h1>
}
<div className='links'>
<Link to={'/blogs'} style={{color:'white',marginRight:'30px'}}>Blogs</Link>
   <Link to={'/'} style={{color:'white',marginRight:'30px'}}>Home</Link>
   {state?<button className='ab' style={{fontSize:'17px',color:'white',backgroundColor:'#21222A',margin:'10px', border:'none'}} onClick={handlee}>Logout</button>:<Link to={'/login'} style={{marginRight:"20px",color:'white'}}>Login</Link>}
   <Link to={'/blog/new'} style={{marginRight:"20px",color:'white'}}>New blog</Link>
</div>
      </div>
    </nav>
  )
}
