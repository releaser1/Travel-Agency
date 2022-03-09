import React from 'react';
import '../Components/header.css'
import { BiUser } from 'react-icons/bi';
import {BrowserRouter as Router, Link} from 'react-router-dom'

function Header  () {



    return (
        <div className="header-main">
            <div className="header-child">
                <div className="logo">
                <span className="logo-a">Intellegence <span className="logo-b">Tour</span></span>
                </div>
                <ul className="header-ul">
                    <li><Link to="/" className="li-header">Home</Link></li>
                    <li><Link to="/destinations" className="li-header">Destinations</Link></li>
                    <li><Link to="/experience" className="li-header">Experience</Link></li>
                    <li><Link to="/contact" className="li-header">Contact</Link></li>
                    <li><Link to="/login" className="li-header"><BiUser /></Link></li>

                </ul>
            </div>
        </div>
    );
};

export default Header;