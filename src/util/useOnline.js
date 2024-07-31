import { useEffect, useState } from "react"

const useOnlineStatus=()=>{
 const [online,setOnline]=useState(true)
 useEffect(()=>{
    window.addEventListener("offline",()=>{
        setOnline(false)
    })
    window.addEventListener("online",()=>{
        setOnline(true)
    })
 })
}
export default useOnlineStatus