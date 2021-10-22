import React from 'react'
import ReactBodymovin from 'react-bodymovin'
import animation from './../404not.json'
 
const App = (props) => {
  const bodymovinOptions = {
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: animation
  }
 
  return (
    <div>
      <ReactBodymovin options={bodymovinOptions} />
    </div>
  )
}
 
export default App