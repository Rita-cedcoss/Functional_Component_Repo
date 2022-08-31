import React from 'react'
import LeftCompenent from './LeftCompenent'
import MiddleComponent from './MiddleComponent'
import RightComponent from './RightComponent'
import './Component.css'
const OuterComponent=()=>{
  return (
    <div id="outer">
    <LeftCompenent></LeftCompenent>
    <MiddleComponent></MiddleComponent>
    <RightComponent></RightComponent>
  </div>
  )
}
export default OuterComponent

