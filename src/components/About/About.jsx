import React from 'react';
import './about.css'
import { FaArrowRight } from "react-icons/fa6";

const About = () => {
  return (
    <section className='about-us'>
        <div className='images-container'>
            <div className='image-group'>
                <img src="https://cdn.techwireasia.com/wp-content/uploads/2017/11/happy-customer.jpg" alt="" className='photo photo-1'/>
                <img src="https://www.travel.dod.mil/portals/119/Images/Cards/Programs/card-program-support-read-faqs.png?ver=wLTG_2mCy3zAAORrW2_f7w%3d%3d" alt="" className='photo photo-2'/>
                <div className='experience-card'>
                    <div className='experience-text'>
                        <span className='experience-number'>10+</span>
                        <span className='experience-label'>Years of Experience</span>
                    </div>
                </div>
            </div>
            <img src="https://thumbs.dreamstime.com/b/businesscouple-travel-agency-office-young-businesscouple-choosing-trip-agent-sitting-travel-agency-office-107694037.jpg" alt="" className='photo photo-3'/>
        </div>
        <div className='about-content'>
            <h2>ABOUT US</h2>
            <h1>Unknown Wanderlust <br/>Your Journey into</h1>
            <p className='desc'>ewfbugfuiwhfughbvisugughd9wqy89
            </p>
            <div className='features'>
                <div className='feature-item'>
                    <div className='feature-header'>
                        <input type="checkbox" checked readOnly className='checkbox'/>
                        <label>Safety Guides</label>
                    </div>
                    <p>Experienced guides to ensure your safety throughout the journey</p>
                </div>
                <div className='feature-item'>
                    <div className='feature-header'>
                        <input type="checkbox" checked readOnly className='checkbox'/>
                        <label>Passport Assistance</label>
                    </div>
                    <p className='feature-description'>Help with all your passport and visa-related needs</p>
                </div>
            </div>
            <button className='read-more-button'>Read More<FaArrowRight className='arrow'/></button>
        </div>
    </section>
  )
}

export default About
