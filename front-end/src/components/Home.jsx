import { useState,useEffect,useRef, useContext, useId } from 'react'
import Bloglist from './Bloglist'
import React from 'react'
import '../css/home.css'
import useFecth from '../custom_hooks/useFecth'
import { useNavigate } from 'react-router-dom'
import { useUsercontext } from '../context/Usercontext'

export default function Home() {
 const nav = useNavigate()
  const {state,dispatch} = useUsercontext()
  const [name,setname] = useState("arbaz")


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
  if(!state){
    nav('/login')
  }
  console.log(skills)
  localStorage.setItem(localStoragekey,JSON.stringify(skills))
},[skills])
useEffect(()=>{
  let a = JSON.parse(localStorage.getItem(localStoragekey))
  setskills(a)
},[]) 
useEffect(()=>{
console.log("state chaneg kardo mia")
if(state){
  console.log(state)
}
},[state])

  const handlenameclick=()=>{
    setname("ibrahim")
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
<button  onClick={handlenameclick} >{name}</button>
<div>{skills.map(l=>(<li key={useId()}>{l}</li>))}</div>
<input type={'text'} style={{fontSize:'20px',border:'1px solid black'}} ref={todo}></input>
<button type='submit' onClick={addtheinp}>submit</button>
{/* {user!==null?<h1>{user}</h1>:<></>} */}
{/* <Footer links={links}/> */}
    </div>
   
  )
}
