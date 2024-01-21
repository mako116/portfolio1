import React from 'react'
import { useState } from 'react'
import{useAutoAnimate} from '@formkit/auto-animate/react'

import { ProductsData } from './ProductData'
import './contain.css'
const Filter = () => {
  const [parent] = useAutoAnimate()

  const [MenuProducts,setMenuProducts]=useState(ProductsData)
   
  const filter = (type)=>{
  setMenuProducts(ProductsData.filter((product)=>product.type === type))    
  }
  return (
    <div className='shift'>
      <div className="producted">
        <ul className='menu'>
          <li onClick={()=> setMenuProducts(ProductsData)}>All</li>
          <li onClick={()=> filter ("html")}>HTML</li>
          <li onClick={()=> filter ("react")}>REACT</li>
          <li onClick={()=> filter ("wordpress")}>WORDPRESS</li>
        </ul>
        <div className="list" ref={parent}>
         {
          MenuProducts.map((product, i)=>(
            <div className="producre" key={i}>
               <ul>
               <li>
                 <img src={product.img} alt="" />
                 <div className="overlay btn1">
                  <div className="content">
                    <h3>{product.name}</h3>
                    <a href={product.source}>
                   Click
                    </a>
                  </div>
                 </div>
                 </li>
                 </ul>
            </div>
          ))
         }
        </div>
      </div>
    </div>
  )
}

export default Filter
