import { Children, createContext, useContext, useReducer } from "react";
import React from "react";
export const Userkcontext = createContext(null)

export default function Usercontext({children}) {
    const reduce = function(state,action){
        switch(action.type){
case "LOGIN":
    return {
        user:action.payload
    }
    case "LOGOUT":{
        return {
            user:null
        }

        }
        default:
            return state
    }
}
const [state,dispatch] = useReducer(reduce,null)
  return (
    <Userkcontext.Provider value={{state,dispatch}}>
        {children}
    </Userkcontext.Provider>
  )
}

export const useUsercontext = () => {
  const context = useContext(Userkcontext)
 if(!context){
    throw Error("context nis not present")

 }
 return context
}


