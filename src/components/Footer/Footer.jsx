import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className='company-info'>
                <div className='background-image'>
                    <img src="http://pluspng.com/img-png/png-jet-plane-leaving-on-a-jetplane-png-by-desperatedeceit-1313.png" alt="background" className='background' />
                    <div className='overlay'>
                        <div className='company-header'>
                            <img src="https://www.pngall.com/wp-content/uploads/8/Flight-PNG-Image-HD.png" alt="compeny-logo" className='company-logo' />   
                            <h2 className='company-name'>RouteX</h2>    
                        </div>
                        <p className='company-description'>Corporate business typically refers to large-scale mansola it enterprises or organization</p>
                        <div className='social-media'>
                            <FaFacebookF/>
                            <FaInstagram/>
                            <FaPinterest/>
                            <FaLinkedinIn/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='service-menu'>
                <h3>Service Menu</h3>
                <ul>
                    <li><FaCheck className='check'/>Mistakes to Avoid</li>
                    <li><FaCheck className='check'/>Mistakes to Avoid</li>
                    <li><FaCheck className='check'/>Mistakes to Avoid</li>
                    <li><FaCheck className='check'/>Mistakes to Avoid</li>
                    </ul>
            </div>
            <div className='useful-links'>
                <h3>Useful Links</h3>
                <ul>
                    <li><FaGreaterThan className='check'/>About Us</li>
                    <li><FaGreaterThan className='check'/>About Us</li>
                    <li><FaGreaterThan className='check'/>About Us</li>
                    <li><FaGreaterThan className='check'/>About Us</li>
                </ul>
            </div>
            <div className='gallery'>
                <h3>Gallery</h3>
                <div className='gallery-images'>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.U_LrAD-5MY1BI94LcirTnAHaJ6&pid=Api&P=0&h=180" alt="" />
                    <img src="https://tse3.mm.bing.net/th?id=OIP.U_LrAD-5MY1BI94LcirTnAHaJ6&pid=Api&P=0&h=180" alt="" />
                    <img src="https://tse3.mm.bing.net/th?id=OIP.U_LrAD-5MY1BI94LcirTnAHaJ6&pid=Api&P=0&h=180" alt="" />
                    <img src="https://tse3.mm.bing.net/th?id=OIP.U_LrAD-5MY1BI94LcirTnAHaJ6&pid=Api&P=0&h=180" alt="" />
                    <img src="https://tse3.mm.bing.net/th?id=OIP.U_LrAD-5MY1BI94LcirTnAHaJ6&pid=Api&P=0&h=180" alt="" />
                    <img src="https://tse3.mm.bing.net/th?id=OIP.U_LrAD-5MY1BI94LcirTnAHaJ6&pid=Api&P=0&h=180" alt="" />
                </div>
            </div>
        </div>
        <hr/>
        <div className='footer-bottom'>
            <p><FaRegCopyright/> RRDevs2024 | All Rights Reserved</p>
            <div className='footer-links'>
                <a href="t">Terms & Conditions</a>
                <a href="p">Privacy Policy</a>
                <a href="c">Contact Us</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
