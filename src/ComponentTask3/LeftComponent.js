import React from 'react'
import LeftFirstComponent from './LeftFirstComponent'
import Left2Component from './Left2Component'
const LeftComponent=()=>{
  return (
    <div id="left">
    <LeftFirstComponent></LeftFirstComponent>
    <Left2Component></Left2Component>
   </div>
  )
}
export default LeftComponent
