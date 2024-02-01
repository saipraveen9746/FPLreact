// src/App.js
import React from 'react';
// import DataDisplay from './Components/Playedetails';
// import Home from './Components/Home/Home';
// import { Navbar } from 'react-bootstrap';

// import NavBBar from'./Components/Navbar/Navbar';
import Home1 from './Components/Home/Home1';
import Register from './Components/Signup/Signup';
import { BrowserRouter,Routes,Route,} from 'react-router-dom';


function App() {
    return (
    <BrowserRouter>
   
      <main>
        <Routes>
         <Route path='/' element={<Home1/>}/>
         <Route path='/register'element={<Register/>}/>
        </Routes>
        </main>
    </BrowserRouter>
    );
}

export default App;
