import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './new.css'
import { useUsercontext } from './Usercontext'

export default function Navbar() {
const {state,dispatch}=  useUsercontext()
console.log(state)
if(state!=null){
  console.log(state.username)
}
  return (
    <nav style= {{position:'sticky',top:'0px',zIndex:'10'}}>
      <div className='Main'>
<h1 style={{'color':"white",padding:'10px'}}>{'Blogs app'}</h1>
{state&&<h1>welcome {state.username}</h1>}
<div className='links'>
<Link to={'/blogs'} style={{color:'white',marginRight:'30px'}}>Blogs</Link>
   <Link to={'/'} style={{color:'white',marginRight:'30px'}}>Home</Link>
   <Link to={'/login'} style={{marginRight:"20px",color:'white'}}>Login</Link>
   <Link to={'/blog/new'} style={{marginRight:"20px",color:'white'}}>New blog</Link>
</div>
      </div>
    </nav>
  )
}
