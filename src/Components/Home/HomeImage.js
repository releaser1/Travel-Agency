import React from 'react';
import {Carousel} from 'react-bootstrap'
import slide1 from '../images/slide2.jpg'


const HomeImage = () => {
    return (
        <div>
    <Carousel controls={false} fade={true} pause={false}>
        <Carousel.Item interval={4000} >
            <img
            className="d-inline-block w-90 smth"
            src="https://www.andrewshoemaker.com/images/xl/na-pali-dreamin-napali-coast-panorama-rainbow.jpg"
            alt="First slide"
            />
        <Carousel.Caption>
            <h3>Welcome to Intellegence Tour</h3>
            <p>A journey of a thousand miles begins with a single step</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={4000} >
        <img
        className="d-inline-block w-90 smth"
        src={slide1}
        alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Welcome to Intellegence Tour</h3>
        <p>A journey of a thousand miles begins with a single step</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={4000} >
        <img
        className="d-inline-block w-90  smth"
        src="https://www.adventuresofbl.com/wp-content/gallery/hawaii-2019-panoramas/hawaii-panorama-1.jpg"
        alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Welcome to Intellegence Tour</h3>
        <p>A journey of a thousand miles begins with a single step</p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default HomeImage;