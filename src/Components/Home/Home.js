import React, {useState} from 'react';
import '../home.css'
import SectionNr3 from '../Home/SectionNr3'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import imgHome2 from '../images/home-img.jpg'
import HomeImage from '../Home/HomeImage'



function Home  (props) {

    return (
        <div className="home-main">
            <div className="home-image" >
                <HomeImage  />
            </div>
            {/* <div className="section-1">
                <div className="section-1-1">
                    <img src={imgSec1} alt="" />
                    <div>
                        <h1 className="section1-h1">FREE CANCELATION</h1>
                        <h3 className="section1-h3">Free cancelation policy</h3>
                    </div>
                </div>
                <div className="section-1-2">
                     <img src={imgSec2} alt="" />
                    <div>
                        <h1 className="section1-h1">Best Prices for traveling</h1>
                        <h3 className="section1-h3">-20% off until the end of the year</h3>
                    </div>
                </div>
                <div className="section-1-3">
                    <img src={imgSec3} alt="" />
                    <div>
                        <h1 className="section1-h1">2020 Award</h1>
                        <h3 className="section1-h3">Best travel agency in 2020</h3>
                    </div>
                </div>
            </div> */}
            <div className="section-2">
                <img  src={imgHome2} className="home-img2"/>
                <div className="btn-section-2">

                <Link to="/destinations" className="li-header"> Explore Deals {'>'}</Link>
                   
                </div>
                <h5>Choose Your Own Adventure</h5>
            </div>
            <SectionNr3 />
        </div>
    );
};

export default Home;