import React from "react";
import littlelemon_logo from "../images/littlelemon_logo.png"
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <nav>
            <Link to="/" aria-label="Little Lemon home">
                <img src={littlelemon_logo} alt="Little Lemon Logo" />
            </Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/order-online">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;