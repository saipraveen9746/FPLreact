// src/App.js
import React from 'react';
// import DataDisplay from '../Components/Playedetails';
// import Home from '../Components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavBBar from '../Components/Navbar/Navbar';
import Register from '../Components/Signup/Signup';

function Layoutroutes() {
    return (
        <div>
        <Router>
          <Routes>
            
            {/* <Route path="/Datadisplay" element={<DataDisplay/>} /> */}
            <Route path="/register" element={<Register/>} />
            
          </Routes>
        </Router>
        </div>
    );
}

export default Layoutroutes;
