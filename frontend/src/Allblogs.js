import React from 'react'
import { Link } from 'react-router-dom'
import useFecth from './useFecth'
import './allblogs.css'
import th from './images/th.jpg'

export default function Allblogs() {
    const {product:data,isload,error}= useFecth(`http://localhost:4000/blogs`)
    console.log(data)
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
    const getffirstfivewords=(body)=>{
const arr= body.split(' ')
const five = arr.filter((l,i)=>i<=5)
return five.join(' ')
    }
  return (
    <div>
        {isload&&<div className='load'>loading...</div>}
        {error&&<div className='error'>{error}</div>}
        <div className='theb'>
      {data?data.map(l=>(<Link  style={{textDecoration:'none'}} to={`/blogs/${l.id}`}><div className='blog'>
       
  <img src={th} alt="Blog image"/>
        <h1 key={l.id}>{l.name}</h1>
<p key={l.id}>{getffirstfivewords(l.body)}</p>
<small key={l.id}>{l.author}</small>
<h3 key={l.id} className='data' style={{fontSize:'30px'}}>{getdate(l.id)}</h3>
      </div></Link>)):<h1>unable to get blogs maybe some fetch error</h1>}
      </div>
    </div>
  )
}
