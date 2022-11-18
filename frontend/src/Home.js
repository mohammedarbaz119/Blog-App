import { useState,useEffect,useRef, useContext } from 'react'
import Bloglist from './Bloglist'

import React from 'react'
import './home.css'

import useFecth from './useFecth'
import Products2 from './Products2'

export default function Home() {
 
  const [state,setstate] = useState(0)
  const [name,setname] = useState("arbaz")
const {product,error,load} = useFecth('http://localhost:4000/products')
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])
// const [links,setlinks] =useState([{name:"google",link:"https://stackoverflow.com/questions/68973474/local-storage-is-not-keeping-the-data-after-page-reload"},{name:"youtube",link:"https://www.youtube.com/watch?v=hQAHSlTtcmY"}])
const localStoragekey ="name" 
  const [skills,setskills] = useState(()=>{
     let a = JSON.parse(localStorage.getItem(localStoragekey))
     return a?a:[]
  })
 const todo = useRef()
  const handleclcik=()=>{
  setstate(prev=>prev+1)

  }
useEffect(()=>{
  console.log(skills)
  localStorage.setItem(localStoragekey,JSON.stringify(skills))
},[skills])
useEffect(()=>{
  let a = JSON.parse(localStorage.getItem(localStoragekey))
  setskills(a)
},[]) 
console.log(state)

  const handlenameclick=()=>{
    setname("ibrahim")
  }
const removeblog=(id)=>{
  const newbolgs = blogs.filter(l=>l.id!==id)
  setBlogs(newbolgs)
}
const addtheinp=()=>{
  const value = todo.current.value
  if(value===''){
    return
  }
  setskills(prev=>[...prev,value])
}
  return (
<div className='home'>     <h1 className='homeh1'>Welcome To The Blog app</h1>
<button  onClick={handleclcik}>{state}</button>
<button  onClick={handlenameclick} >{name}</button>
<div>{skills.map(l=>(<li key={l}>{l}</li>))}</div>
<Bloglist skills={blogs} title={"Blog title"}
removeblog={removeblog}/>
<Bloglist skills={blogs.filter(l=>l.author==="mario")} title={"mario blogs"} removeblog={removeblog}/>
<input type={'text'} style={{fontSize:'20px',border:'1px solid black'}} ref={todo}></input>
<button type='submit' onClick={addtheinp}>submit</button>
{/* {user!==null?<h1>{user}</h1>:<></>} */}
{/* <Footer links={links}/> */}
{error&&<div>{error}</div>}
{load&&<div>...loading</div>}
{product&&<Products2 pro={product}/>}
    </div>
   
  )
}
