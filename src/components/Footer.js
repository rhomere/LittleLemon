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
                <li>4501 SE 2nd St, Miami, FL 33133</li>
                <li>PH: (305) 555-1234</li>
                <li>Email: info@littlelemon.com</li>
            </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
            <ul>
                <li><a href="https://facebook.com/littlelemon" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://twitter.com/littlelemon" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://instagram.com/littlelemon" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
            </div>
            </section>
        </footer>
    )
}

export default Footer;