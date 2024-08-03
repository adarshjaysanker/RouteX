import React from 'react'
import './hero.css'
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero-overlay'></div>
        <div className='hero-content'>
            <h1 className='hero-motto'>
                <span className='motto-line'>Journey with Confidence</span>
                <span className='motto-line'><span className='green-text'>Migrate</span> with Us</span>
            </h1>
            <p className='hero-description'>Discover how we can assist you in a smooth transition with our expert services and personilized support</p>
            <button className='hero-button'>Learn More<FaArrowRight className='arrow'/></button>
        </div>
    </section>
  )
}

export default Hero
