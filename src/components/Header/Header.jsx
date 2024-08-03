import React, { useState } from 'react';
import './header.css'
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbMessages } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Header = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

  return (
    <header className='header'>
        <GiHamburgerMenu className='hamburger-menu' onClick={toggleSidebar}/>
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <IoMdCloseCircleOutline className='close-icon' onClick={toggleSidebar}/>
            <ul className='sidebar-list'>
                <li className='sidebar-item'>HOME</li>
                <li className='sidebar-item'>ABOUT US</li>
                <li className='sidebar-item'>STORY</li>
                <li className='sidebar-item'>VISA</li>
                <li className='sidebar-item'>BLOG</li>
                <li className='sidebar-item'>PAGE</li>
                <li className='sidebar-item'>CONTACT</li>
            </ul>
        </div>
        <div className='logo-container'>
            <img src="https://png.pngtree.com/png-clipart/20230810/original/pngtree-template-for-travel-logo-design-with-airplane-tickets-and-logo-for-travel-agencies-vector-picture-image_10244674.png" alt="" className='logo' />
            <span className='company-name-header'>RouteX</span>
        </div>
        
        <nav className='nav'>
            <ul className='nav-list'>
                <li className='nav-item'>
                    HOME <RiArrowDropDownLine className='dropdown-icon'/>
                </li>
                <li className='nav-item'>
                    ABOUT US <RiArrowDropDownLine className='dropdown-icon'/>
                </li>
                <li className='nav-item'>
                    STORY <RiArrowDropDownLine className='dropdown-icon'/>
                </li>
                <li className='nav-item'>
                    VISA <RiArrowDropDownLine className='dropdown-icon'/>
                </li>
                <li className='nav-item'>
                    BLOG <RiArrowDropDownLine className='dropdown-icon'/>
                </li>
                <li className='nav-item'>
                    PAGE <RiArrowDropDownLine className='dropdown-icon'/>
                </li>
                <li className='nav-item'>
                    CONTACT <RiArrowDropDownLine className='dropdown-icon'/>
                </li>
            </ul>
        </nav>
        <div className='help-section'>
            <div className='help-text-container'>
                <TbMessages className='message-icon'/>
                <div className='help-text'>
                <span>Need help?</span>
                <span className='contact-number'>(307)555-0133</span>
                </div>
            </div>
        </div>
       
    </header>
  )
}

export default Header
 