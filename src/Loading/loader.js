import React, { useEffect } from 'react'
import './loadeer.css'
import { preLoaderAnim } from '../animation'
const Loader = () => {
     useEffect(()=>{
      preLoaderAnim()
     })
  return (
    <div className='preloader'>
      <div className="texts-container">
        <span>welcome</span>
        <span>glance</span>
        <span>through</span>
      </div>
    </div>
  )
}

export default Loader
