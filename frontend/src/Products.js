import React, { useEffect, useState } from 'react'
import axios from "axios";


export default function Products(){
  
const [pro,setpro] = useState(null)
useEffect(()=>{
  axios.get(`http://localhost:4000/products`).then(res=>{
  
  setpro(res.data)})
console.log("use efect ran");
  },[])
  return (
    <div>
      <h1>product</h1>
      {pro&&pro.map(l=>(<div><h1 key={Date.now()}>{l.name}</h1>
      <h3 key={l.rate}>{l.rate}</h3>
      </div>))}
    </div>
  )
}
