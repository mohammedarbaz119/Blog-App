import axios from 'axios'
import React, { useState,useEffect } from 'react'
import '../css/newblog.css'
import { useNavigate } from 'react-router'
import { useUsercontext } from '../context/Usercontext'
export default function NewBlog() {
const {state,dispatch} = useUsercontext()
const nav = useNavigate()
 const [title,setnameval] =useState('')
 const [body,setbody]=useState('')
 const [err,seterr] = useState('')
 const [author,setauthor]=useState(JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')).username:"")

 useEffect(()=>{
  if(!state){
    nav('/login')
  }
 },[state])

  return (<>
    <h1 style={{translate:'575px 60px',fontSize:'55px'}}>Create a new Blog</h1>
    <div className='crete'>
      
      <form onSubmit={(e)=>{e.preventDefault()
      const blog = {title:title,body,author}
      console.log(blog)
      axios.post('http://localhost:4000/blog/new',{
    
        blog
      },{
        headers:{
          "Authorization": `Bearer ${state.user.token}`
        }
      }).then(res=>{console.log(res.data)
      nav('/')}).catch(err=>{
      console.log(err)})
      }}>
      <label>title</label>
      <input autoComplete='true' type={'text'}
      value={title}
      onChange={(e)=>setnameval(e.target.value)}/>
      <label>details</label>
      <textarea required  autoComplete='true' value={body} onChange={(e)=>setbody(e.target.value)}></textarea>
<input type={'submit'} value={'Add a Blog'}/>
      </form>
      
    </div>
    {err&&<h1 style={{color:'red'}}>{err}</h1>}
    </>
  )
}
