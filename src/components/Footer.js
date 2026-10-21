import React from "react"
import small_logo from "../images/small_logo.png"
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer>
            <section>
            <div>
                <Link to="/" aria-label="Little Lemon home">
                    <img src={small_logo} alt="Little Lemon" />
                </Link>
            </div>
            <div>
                <h3>Document Navigation</h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/order-online">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            </div>
            <div>
                <h3>Contact</h3>
            <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
            <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            </div>
            </section>
        </footer>
    )
}

export default Footer;