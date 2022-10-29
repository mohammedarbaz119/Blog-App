import { useParams } from "react-router"
import React from "react"
import useFecth from "./useFecth"


export default function SingleBlog() {
    const {id}= useParams()
    const {product:data,isload,error}= useFecth(`http://localhost:4000/blogs/${id}`)
    const getdate=(id)=>{
      const d = new Date(id)
      const y = d.getFullYear()
      const m = d.getMonth()+1
      const da = d.getDate()
      const hr = d.getHours()
      const min = d.getMinutes()
      let c;
      switch(m){
        case 1:
          c='jan';
          break;
        case 2:
          c='feb';
          break;
        case 3:
          c='mar';
          break;
        case 4:
          c='april';
          break;
        case 5:
          c='may';
          break;
        case 6:
          c='june';
          break;
        case 7:
          c='july';
          break;
        case 8:
          c='aug';
          break;
        case 9:
          c="sep";
          break;
        case 10:
          c="oct"
          break;
        case 11:
          c="nov"
          break;
        case 12:
          c='dec'
          break;
      }
return `${da}-${c}-${y} ${hr}:${min}`
    }
  return (
    <>
    {isload&&<div>loading...</div>}
        {error&&<div>{error}</div>}
        {data?data.map(l=>(<div className='clog'>
        <h1 key={l.id}>{l.name}</h1>
        <h3 key={l.id} className='data' style={{fontSize:'30px'}}>{getdate(l.id)}</h3>
        <h1 key={l.id}>Written by {l.author}</h1>
<p key={l.id}>{l.body}</p>
</div>)):<h1 style={{color:'red',fontSize:'30px',translate:'400px'}}> no blogs at the moment maybe some fetch error</h1>}
    </>
  )
}
