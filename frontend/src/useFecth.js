import { useState,useEffect } from "react"
const useFecth = (url)=>{
    const [isload,setload] = useState(true)
    const [product,setpro] = useState(null)
    const [error,seterror]= useState(null)
    useEffect(()=>{
 const abot= new AbortController();
        fetch(url,{signal:abot.signal}).then(res=>{
        if(!res.ok){
      throw new Error("not ok bro fix server")
        }  
        return res.json()}).then(data=>{
        console.log(data)  
        seterror(null)
        setpro(data)
      setload(false)
      }).catch(err=>{
        if(err.name==='AbortError'){
console.log(err.message)
        }
        else{
        setload(false)
        seterror(err.message)
      }
      })
      return ()=> abot.abort();
      },[url])
      return {
        product,error,isload
      }
}
export default useFecth;