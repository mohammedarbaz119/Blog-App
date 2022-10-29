import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './new.css'
import { Usercontext } from './Usercontext'
//  let link1="http://google.com"
//  let link2 ="#"
export default function Navbar() {
  const {user,setuser} = useContext(Usercontext)
  return (
    <div style= {{position:'sticky',top:'0px',zIndex:'10'}}>
      <nav className='Main'>
<h1 style={{'color':"white",padding:'10px'}}>{'Blogs app'}</h1>
{user&&<h1>welcome {user}</h1>}
<div className='links'>
<Link to={'/blogs'} style={{color:'white',marginRight:'30px'}}>Blogs</Link>
   <Link to={'/'} style={{color:'white',marginRight:'30px'}}>Home</Link>
   <Link to={'/login'} style={{marginRight:"20px",color:'white'}}>Login</Link>
   <Link to={'/blog/new'} style={{marginRight:"20px",color:'white'}}>New blog</Link>
</div>
      </nav>
    </div>
  )
}
