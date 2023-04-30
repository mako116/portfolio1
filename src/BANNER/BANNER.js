import React from 'react'
import {Link} from "react-router-dom"
import './Banner.css'
const Bannner = () => {
  return (
    
      <div className="Banner">
				<div className="wrapper">
					<h5>Get Started With your project</h5>
					<h3>I Am Available For Freelancer !</h3>
					<Link to="/contact" className='button'>Hire Me</Link>
				</div>
			</div>

  )
}

export default Bannner
