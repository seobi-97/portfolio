import React from 'react'

function useCheckView(ele:HTMLElement) {
  if(!ele||!window){
    return false;
  }
  const{
    top:elementTop,
    bottom:elementBottom,
  }=ele.getBoundingClientRect();
  return elementBottom>0&&elementTop<=window.innerHeight;
}

export default useCheckView
