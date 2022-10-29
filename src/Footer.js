import React from 'react'
import './foot.css'

export default function Footer(props) {
  return (
    <div className='foot'>
    {props.links.map(l=>(<a className='link' href={l.link} key={l}>{l.name}</a>))}
    </div>
  )
}
