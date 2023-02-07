import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return (
        <div id="nav" className="ui secondary  menu">
           <Link to="/" className="item">Home</Link>
           <Link to="/barchart" className="item">Bar Chart</Link>
           <Link to="/piechart" className="item">Pie Chart</Link>
        </div>
    )
}

export default NavBar;
