import React from 'react';
import '../Components/error.css'
import {BrowserRouter as Router, Link} from 'react-router-dom'


function Error () {
    return (
        <div className="home-main">
            <div className="home-image error-page" >
                <div className="error-content">
                <h1>404</h1>
                <h3>There's nothing here...</h3>
                <Link to="/" style={{alignSelf: 'center'}}  className="button button--hyperion"><span><span>Back to Home</span></span> </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;