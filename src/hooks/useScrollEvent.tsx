import React, {useEffect} from 'react'

function useScrollEvent(listener:(this:Window,e:Event)=>any) {
  useEffect(()=>{
    window.addEventListener("scroll",listener);
    return ()=>{
      window.removeEventListener("scroll",listener);
    }
  },[])
  return (
    <div>
      
    </div>
  )
}

export default useScrollEvent
