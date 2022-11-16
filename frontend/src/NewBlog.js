import axios from 'axios'
import React, { useState } from 'react'
import './newblog.css'
import { useNavigate } from 'react-router'

export default function NewBlog() {
 const [nameval,setnameval] =useState('')
 const [body,setbody]=useState('')
 const [author,setauthor]=useState('')

 const nav = useNavigate()
  return (<>
    <h1 style={{translate:'575px 60px',fontSize:'55px'}}>Create a new Blog</h1>
    <div className='crete'>
      
      <form onSubmit={(e)=>{e.preventDefault()
      const blog = {name:nameval,body,author}
      console.log(blog)
      axios.post('http://localhost:4000/blog/new',{
        blog
      }).then(res=>{console.log(res)
      nav('/')}).catch(err=>console.log(err))
      }}>
      <label>Name</label>
      <input autoComplete='true' type={'text'}
      value={nameval}
      onChange={(e)=>setnameval(e.target.value)}/>
      <label>details</label>
      <textarea required  autoComplete='true' value={body} onChange={(e)=>setbody(e.target.value)}></textarea>
      <label>author</label>
<input type={'text'} autoComplete='true' required value={author} onChange={(e)=>setauthor(e.target.value)}/>
<input type={'submit'} value={'Add a Blog'}/>
      </form>
    </div>
    </>
  )
}
