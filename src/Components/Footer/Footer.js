import React from 'react';
import { FaFacebookF} from 'react-icons/fa'; 
import {AiOutlineTwitter, AiFillGooglePlusCircle, AiOutlineInstagram } from 'react-icons/ai';
import {FcGlobe } from 'react-icons/fc';
import {BsTelephone } from 'react-icons/bs';
import {RiSendPlaneLine} from 'react-icons/ri';




import '../Footer/footer.css'

function Footer() {
    return (
        <div className="footer-main">
            <div className="footer-child">

            <div className="footer-one">                
                <div className="footer-one-first">
                    <div className="logo delete-class-footer">
                        <span className="logo-a">Intellegence <span className="logo-b">Tour</span></span>
                    </div>
                    
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro consequuntur ratione natus? In, totam! Voluptate incidunt  consectetur adipisicing elit. Pariatur porro consequuntur ratione natus? In, totam! Voluptate incidunt</h4>
                    <h5>Follow us</h5>
                    <div className="icon-container">
                        <div className="iconFa"><FaFacebookF className="fb-icon"/></div>
                        <div className="iconFa"><AiOutlineTwitter className="twt-icon"/></div>
                        <div className="iconFa"><AiFillGooglePlusCircle className="google-icon"/></div>
                        <div className="iconFa"><AiOutlineInstagram className="inst-icon"/></div>
                    </div>
                </div>
                <h1 className="delete-class-footer">Best Travel Agency in 2020</h1>
            </div>


            <div className="footer-two">
                <div className="map-element">
                    <div className="map-icon">
                        <FcGlobe className="globe-icon"/>
                    </div>
                    <div className="map-adress">
                            <p> San Bernardino County,</p>
                            <p>9500 Etiwanda Ave, California</p> 
                             
                    </div>
                </div>
                <div className="links-element">
                        <div className="first-row">
                            <h3 className="links-h3">About Us</h3>
                            <h3 className="links-h3">Newsletter</h3>
                            <h3 className="links-h3">Services</h3>
                            <h3 className="links-h3">Team</h3>
                        </div>
                        <div className="second-row">
                            <h3 className="links-h3">Contact Us</h3>
                            <h3 className="links-h3">Partners</h3>
                            <h3 className="links-h3">Deals</h3>
                            <h3 className="links-h3">FAQ</h3>
                        </div>
                </div>
            </div>


            <div className="footer-three">
                <div className="map-element">
                    <div className="map-icon">
                        <BsTelephone className="globe-icon" style={{color: '#55ACEE'}}/>
                    </div>
                    <div className="map-adress">
                            <p>1 (855) 261-8833</p>
                            <p>Give us a call</p> 
                    </div>
                </div>
                <div className="input-element">
                    <h5>
                        Subscribe to us
                    </h5>
                    <input type="text" placeholder="Email Adress" className="input-footer"/>
                    <RiSendPlaneLine className="call-icon"/>
                </div>
            </div>

            </div>
        </div>
    );
}

export default Footer;