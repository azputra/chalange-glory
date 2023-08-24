import React from "react";
import logoDummy from '../assets/logo-dummy.png'
import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <nav className="navbar">
            <Link className="navbar-brand" to='/'>
                <img src={logoDummy} alt="logo-dummy" width="161" height="67"/>
            </Link>
        </nav>
    )   
}