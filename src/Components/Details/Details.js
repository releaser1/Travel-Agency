import React from 'react';
import '../Details/details.css'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



function Details(props) {
    return (
        <div className='details-main-container'>
           <div className='details-item-1'>
               <h1>Sydney, Australia</h1>
           </div>
           <div className='details-item-2'>
               <img src="https://www.umultirank.org/export/sites/default/.galleries/generic-images/Others/Winter-Calendar/why-should-I-study-in-Sydney.jpg_1079324579.jpg" alt="sydney" className='first-image-country'/>
           </div>
           <div className='details-item-3'>
               <div className='item-3-1'>
                    <div className='item-3-1-1'>
                        <h3>Country:</h3>
                        <span>Sydney, Australia</span>
                        <div>
                            <img src="https://cdn.britannica.com/78/6078-004-77AF7322/Flag-Australia.jpg" alt="flag1" />
                        </div>
                    </div>
                   <h4>Description:</h4>
                   <p>Australia is the only country in the world that covers an entire continent. It is one of the largest countries on Earth. Although it is rich in natural resources and has a lot of fertile land, more than one-third of Australia is desert.
                   Most Australian cities and farms are located in the southwest and southeast, where the climate is more comfortable. There are dense rain forests in the northeast. The famous outback (remote rural areas) contains the country's largest deserts, where there are scorching temperatures, little water, and almost no vegetation.
                   </p>
               </div>
               <div className='item-3-2'>

               </div>
               
           </div>
           <div className='details-item-4'>
               <div className='item-4-1'>
                    <div className='subitem-4-1'>
                        <span className='about-trip'>Category:</span> 
                        <span className='about-data'>Trip</span>
                    </div>
                    <div className='subitem-4-2'>
                        <span className='about-trip'>Duration:</span>   
                        <span className='about-data'>13 Days</span>
                    </div>
                    <div className='subitem-4-3'>
                        <span className='about-trip'>Price:</span> 
                        <span className='about-data'>147 $</span>
                    </div>
                    <div className='subitem-4-4'>
                        <span className='about-trip'>Starting date:</span> 
                        <span className='about-data'>03.05.2022</span>
                    </div>
               </div>
           </div>
        </div>
    );
}

export default Details;