import React, {useState} from 'react';
import Data from '../Home/Data'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import '../Home/sectionNr3.css'

function SectionNr3() {

    const {destinations, hawaii} = Data;


    /* Exp filter and price*/
   


    return (
        <div className="section-nr3-body">
        {destinations.map((item) => 
                <section key={item.id}>
                <div className="container">
                <div className="card">
                <div className="content">
                    <div className="imgBx">
                        <img src={item.image} />
                    </div>
                    <div className="contentBx">
                        <h3>{item.name}<br/></h3>
                    </div>
                </div>
                <ul className="sci">
                    <li>
                    <Link to="/destinations" className="li-header"><a href="./">See More</a></Link>
                        
                    </li>

                </ul>
                </div>
                </div>
                </section>               
        )
        }
      </div>  
    );
}

export default SectionNr3;