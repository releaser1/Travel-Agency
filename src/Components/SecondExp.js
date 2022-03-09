import React from 'react';
import '../experience.css'
import {BrowserRouter as Router, Link} from 'react-router-dom'


function SecondExp(props) {
    return (
        <div className='experience-page'>
        
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <span  className='book-btn'><Link to="/destinations" className="li-header">Book Now</Link></span>
        </div>
            
        <div className='nature-field'>
            <img src="https://media.istockphoto.com/photos/beautiful-nature-norway-aerial-photography-picture-id840781672?b=1&k=20&m=840781672&s=170667a&w=0&h=iXRzRICRiVqcNIUd-j-XNy4fJBk4ta75FvG-_UcSqcY=" alt="" className='image-nature'/>
            <p  style={{textAlign: 'center', alignSelf: 'center', fontSize: '20px'}}>""Nature travel offers the thrill of discovering something new, or at the very least, something only a fraction of people have seen in person. Feel the delight of taking in scenic views from a crisp mountaintop while a doe silently wanders below with her fawn, or the excitement of snorkeling at an untouched coral reef.""</p>
        </div>
        <div className='trip-field'>
            <img src="https://a.cdn-hotels.com/gdcs/production2/d1821/71438820-8f10-11e8-b6b0-0242ac110007.jpg" alt="" className='image-nature'/>
            <p  style={{textAlign: 'center', alignSelf: 'center', fontSize: '20px'}}>""A beach is a narrow strip of land separating a body of water from inland areas. Beaches are usually made of sand, tiny grains of rocks and minerals that have been worn down by constant pounding by wind and waves. ...""</p>
        </div>
        <div className='hiking-field'>
            <img src="https://www.wildernesstravel.com/images/trips/europe/norway/hiking-norways-fjord-country/1-slide-norway-fjord-trek-vista-pano.jpg" alt="" className='image-nature'/>
            <p  style={{textAlign: 'center', alignSelf: 'center', fontSize: '20px'}}>""Hiking, walking in nature as a recreational activity. Because hikers can walk as far as they want, there is no physical strain unless they walk among hills or mountains. ...""</p>
        </div>
        <div className='mountain-field'>
            <img src="https://www.tripsavvy.com/thmb/kYVdcjnpED7FjFNraBSJkpqS_9g=/3864x2173/smart/filters:no_upscale()/scenic-view-of-trees-and-mountains-against-sky-697547763-5c328a0546e0fb0001e7aa6f.jpg" alt="" className='image-nature'/>
            <p  style={{textAlign: 'center', alignSelf: 'center', fontSize: '20px'}}>""They usually have steep, sloping sides and sharp or rounded ridges, and a high point, called a peak or summit. Most geologists classify a mountain as a landform that rises at least 1,000 feet (300 meters) or more above its surrounding area. A mountain range is a series or chain of mountains that are close together.""</p>
        </div>
        
        <div className='set-images'>
            <div className='exp-images e1'></div>
            <div className='exp-images e2'></div>
            <div className='exp-images e3'></div>
            <div className='exp-images e4'></div>
        </div>
        </div>
    );
}

export default SecondExp;