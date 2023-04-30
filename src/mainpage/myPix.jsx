import React from 'react'
import Ddata from './Cdata'
import image from '../image/imagi.jpg'
 import './mainx.css'
import cv from '../component/Chukwuebuka Emmanuel Nwakwue.pdf'
 
const MyPix = () => {
   return (
    <div>
      {Ddata.map((data, index)=>{
        return(
            <div className="product backgrounded" key={index}>
            
            <h2>About Me</h2>

            <div className="container contain_me">
                <div className="img">
                <img src={image} alt='' />
                </div>
                
                <div className="h-text">
                <h4 >{data.name}</h4>
                 <p>{data.para}</p>
                </div>
            </div>
            <div className='chip'>
            <a href={cv} download>
            <button >Download Cv</button>
            </a>
            </div>
            </div>
        )
      })}
     </div>
  )
}

export default MyPix
