import React from "react";
import './Navbar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="/" className="logocontainer">
          <img alt="premiere league logo" className="pl-header-logo" src="https://www.premierleague.com/resources/rebrand/v7.129.2/i/elements/pl-main-logo.png"/>
        </a>  
        <ul className="nav-text-1"><li><a href="/" className="Fpl-text">Fantasy</a></li></ul>
      </div>
      <div className="nav-right">
        <ul className="navtext-2">  
          <li><a href="/" className="text-1"><b>Home</b></a></li>
          <li><a href="/" className="text"><b>Players</b></a></li>
          <li><a href="/" className="text"><b>Top Players</b></a></li>
        </ul>
      </div>
    </nav>

  );
}

export default NavBar;
