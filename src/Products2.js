import React from 'react'

export default function Products2({pro}) {
 
    
       return (
  <div>
      <h1>product</h1>
      {pro&&pro.map(l=>(<div><h1 key={l}>{l.name}</h1>
      <h3 key={l.rate}>{l.rate}</h3>
      </div>))}
    </div>
  )
  
}
