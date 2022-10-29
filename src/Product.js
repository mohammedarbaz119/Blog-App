import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router'

export default function Products(){
  const {id} = useParams()
const [pro,setpro] = useState(null)
useEffect(()=>{
  axios.get(`http://localhost:4000/products/${id}`).then(res=>{
  
  setpro(res.data.payload)})
  console.log(pro)
},[pro])
  return (
    <div>
      <h1>product</h1>
      {pro&&pro.map(l=>(<div><h1 key={l}>{l.name}</h1>
      <h3 key={l.rate}>{l.rate}</h3>
      </div>))}
    </div>
  )
}
