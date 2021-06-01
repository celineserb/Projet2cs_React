import React from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'

const TheLayout = () => {

  return (
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
<<<<<<< HEAD
        <TheHeader/>
        <div className="c-body">
          <TheContent/>
=======
        <TheHeader />
        <div className="c-body" style={{
          backgroundColor: "#fff"
        }}>
          <TheContent />
>>>>>>> 29399402f9cabe37454440b81627148b441f7e3e
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout
