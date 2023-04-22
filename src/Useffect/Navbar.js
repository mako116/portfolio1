import { useState } from "react";
 import './navbar.css'
    const Navbar = () => {
 
    window.addEventListener("scroll", ()=>{
        const search = document.querySelector(".search")
        search.classList.toggle("active", window.scrollY > 100)
      })
    return ( 
        <header className='search'>
       
            <h2>N</h2>
        </header>
     );
   }
    
   export default Navbar;