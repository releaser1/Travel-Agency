import React, { useState } from 'react';
import ListDestinations from './ListDestinations';

import '../Destinations/destinations.css'

function Destinations(props) {
    

    return (
        <div className="destinations-container">
            <div className="destinations-grid-images">
                <figure className="gallery__item gallery__item--1">
                    <img src="https://i.pinimg.com/736x/71/82/6d/71826d6e8e9aefad412fa5c32589e786--hawaiian-islands-oahu-hawaii.jpg" alt="img1" className="gallery__img"/>
                </figure>
                <figure className="gallery__item gallery__item--2">
                    <img src="https://wildlandtrekking.com/content/uploads/2020/03/yosemite-2826655_1920-1024x323-1.jpg" alt="img2" className="gallery__img"/>
                </figure>
                <figure className="gallery__item gallery__item--3">
                    <img src="https://images.unsplash.com/photo-1513415277900-a62401e19be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWF1cml0aXVzfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="img3" className="gallery__img"/>
                </figure>
            </div>

            <ListDestinations  />


        </div>
    );
}

export default Destinations;