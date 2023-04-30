import React from 'react';
import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom'
 import Rome from '../pages/Homed';
 
  

const MyRoutes = () => {
    return (
        <Router>
        <Routes>
              <Route path='/' exact element={<Rome/>}></Route> 
      
        </Routes>
            
        </Router>
    );
};

export default MyRoutes;