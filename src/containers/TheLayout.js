import React from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'

const TheLayout = () => {

  return (
    <div className="c-app"  style={{background: '#FBFBFB'}}>
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body ourmainlayout">
          <TheContent/>
        </div>
        {/* <TheFooter/> */}
      </div>
    </div>
  )
}

export default TheLayout
