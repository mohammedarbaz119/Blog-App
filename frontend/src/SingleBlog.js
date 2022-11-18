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
          c='Janruary';
          break;
        case 2:
          c='Febuary';
          break;
        case 3:
          c='March';
          break;
        case 4:
          c='April';
          break;
        case 5:
          c='May';
          break;
        case 6:
          c='June';
          break;
        case 7:
          c='July';
          break;
        case 8:
          c='August';
          break;
        case 9:
          c="September";
          break;
        case 10:
          c="October"
          break;
        case 11:
          c="November"
          break;
        case 12:
          c='December'
          break;
      }
return `${da}-${c}-${y} ${hr}:${min}`
    }
  return (
    <>
        {error&&
        <h1 style={{color:'red',fontSize:'30px',translate:'400px'}}> no blogs at the moment maybe some fetch error</h1>}
        {data?data.map(l=>(<div className='clog'>
        <h1 key={l.id}>{l.name}</h1>
        <h3 key={l.id} className='data' style={{fontSize:'30px'}}>{getdate(l.id)}</h3>
        <h1 key={l.id}>Written by {l.author}</h1>
<p key={l.id}>{l.body}</p>
</div>)):<div>loading...</div>}
    </>
  )
}
