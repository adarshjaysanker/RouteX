import React from 'react'
import './services.css';
import { IoFastFoodOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";


const Services = () => {
  return (
    <section className='services-section'>
        <div className='services-content'>
            <div className='services-heading'>
                <h2>Our Services</h2>
                <h1>Adventure Unleashed<br/>Discover Your Next</h1>
            </div>
            <div className='services-image'></div>
            <div className='services-cards'>
                <div className='service-card'>
                    <div className='service-icon'>
                        <IoFastFoodOutline className='icon'/>
                    </div>
                    <h3>Food and Wine Tours</h3>
                    <p>Tailor-made travel plans to suit your preferences and budget
                    Tailor-made travel plans to suit your preferences and budget
                    Tailor-made travel plans to suit your preferences and budget
                    </p>
                </div>
                <div className='service-card'>
                    <div className='service-icon'>
                        <IoFastFoodOutline className='icon'/>
                    </div>
                    <h3>Food and Wine Tours</h3>
                    <p>Tailor-made travel plans to suit your preferences and budget
                    Tailor-made travel plans to suit your preferences and budget
                    Tailor-made travel plans to suit your preferences and budget
                    </p>
                </div>
                <div className='service-card'>
                    <div className='service-icon'>
                        <IoFastFoodOutline className='icon'/>
                    </div>
                    <h3>Food and Wine Tours</h3>
                    <p>Tailor-made travel plans to suit your preferences and budget
                    Tailor-made travel plans to suit your preferences and budget
                    Tailor-made travel plans to suit your preferences and budget
                    </p>
                </div>
            </div>
            <div className='arrow-buttons'>
                <button className='arrow-button left'>
                    <FaArrowLeft className='arrow-icon' />
                </button>
                <button className='arrow-button right'>
                    <FaArrowRight className='arrow-icon' />
                </button>
            </div>
        </div>
       
    </section>
  )
}

export default Services
