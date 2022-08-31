import React from 'react'
import './Component.css'
import ComponentNav from './ComponentNav'
import MainComponent from './MainComponent'
function ComponentOuter() {
  return (
<div id="outer">
      <ComponentNav></ComponentNav>
      <MainComponent></MainComponent>
      </div>
  )
}
export default ComponentOuter
