import { Children, createContext, useContext, useReducer } from "react";
import React from "react";
import { useEffect } from "react";
import { json } from "react-router-dom";
export const Userkcontext = createContext(null)

export default function Usercontext({children}) {
    const reduce = function(state,action){
        switch(action.type){
case "LOGIN":
    localStorage.setItem("user",JSON.stringify(action.payload))
    return {
        user:action.payload
    }
    case "LOGOUT":{
        localStorage.setItem("user",null)
        return null
        }
        default:
            return state
    }
}
let user 
useEffect(()=>{
  user= JSON.parse(localStorage.getItem('user'))
  },[])
const [state,dispatch] = useReducer(reduce,user)

  return (
    <Userkcontext.Provider value={{state,dispatch}}>
        {children}
    </Userkcontext.Provider>
  )
}

export const useUsercontext = () => {
  const context = useContext(Userkcontext)
 if(!context){
    throw Error("context is not present")

 }
 return context
}


