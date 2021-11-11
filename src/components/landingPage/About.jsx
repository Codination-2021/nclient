import React from 'react'
import about from "./images/about.svg";
import Common from './Common'
import Navbar from './Navbar'
import './landing.css'

const About = () => {
    return (
        <>
            <Navbar />
            <Common 
                name='Welcome to About Page' 
                imgsrc={about} 
                visit='/contact' 
                btnname="Contact Now" 
            />
        </>
    )
}

export default About
