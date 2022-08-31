import React from 'react'
import LeftComponent from './LeftComponent'
import MidComponent from './MidComponent'
import RightComponent from './RightComponent'
 function MainComponent() {
  return (
    <div id="mainComponent">
         <LeftComponent></LeftComponent>
         <MidComponent></MidComponent>
         <RightComponent></RightComponent>
      </div>
  )
}
export default MainComponent
