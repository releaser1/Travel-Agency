import React from 'react';
import contactImg from '../images/contact-us.jpg'
import '../Contact/contact.css'
import {AiOutlineHome, AiTwotonePhone, AiOutlineMail} from 'react-icons/ai';

function Contact(props) {
    return (
        <div className="contact-main-container">
            <div className="contact-img-container">
                <img src={contactImg} alt="" className="contact-image" />
                <h3>Contact Us</h3>
            </div>
            <div className="contact-information-container">
                <div className="information-section-one">
                            <h6>Send us a feedback</h6>
                            <div >
                                <input type="text" placeholder='Enter your name' className='input-form'/>
                            </div>
                            <div >                                
                                <input type="text" placeholder='Enter your email' className='input-form'/>
                            </div>
                            <div>                                
                                <input type="text" placeholder='Enter your message' className='input-form third-input'/>
                            </div>
                            <span>Send us a feedback</span>


                </div>

                <div className="information-section-two">
                        <h2>Our Contacts</h2>
                        <hr />
                        <div className='contacts-containers'>
                            <AiOutlineHome style={{fontSize: '25px'}}/> <span className='contacts-details'>San Bernardino County, 9500 Etiwanda Ave, California</span>
                        </div>
                        <div className='contacts-containers'>
                            <AiTwotonePhone style={{fontSize: '25px'}}/> <span className='contacts-details'>1 (855) 261-8833</span>
                        </div>
                        <div className='contacts-containers'>
                            <AiOutlineMail style={{fontSize: '25px'}}/> <span className='contacts-details'>intellegence.tour@example.com</span>
                        </div>
                        <hr />
                        <p style={{textAlign: 'center', fontSize: '20px', color: '#3B4371'}}>Monday - Friday</p>
                        <p style={{textAlign: 'center', fontSize: '20px', color: '#c5796d'}}>08:00-17:00</p>
                        <hr style={{width: '50%', marginLeft: '25%'}}/>
                        <p style={{textAlign: 'center', fontSize: '20px', color: '#3B4371'}}>Saturday</p>
                        <p style={{textAlign: 'center', fontSize: '20px', color: '#c5796d'}}>09:00-13:00</p>
                </div>
            </div>

            
        </div>
    );
}

export default Contact;