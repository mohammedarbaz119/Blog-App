import React from "react";
const Bloglist = ({skills,title,removeblog}) => {
   
    return (  
        <div>
            <h1>{title}</h1>
   {skills.map((l)=>( <div key={l.id}>
<h1>{l.title}
</h1>
<div>{l.body}</div>
<button onClick={()=>removeblog(l.id)} className="remove">del</button>
   </div>))}


        </div>
    );
}
 
export default Bloglist;