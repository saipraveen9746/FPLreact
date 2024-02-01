import React from "react";
import Home from "../Clublogos/Clublogo";
import NavBar from "../Navbar/Navbar";
import Body1 from "../Body1/Body1";
import Login from "../Login/Login";
// import { Routes,Route } from "react-router-dom";
// import Register from "../Signup/Signup";

function Home1(){
    return(
        <div className="App1">
        {/* <DataDisplay /> */}
        <Home/>
        <NavBar/>
        <Body1/>
        <Login/>

        
        </div>

    )

}
export default Home1