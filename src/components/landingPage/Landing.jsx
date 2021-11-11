import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from 'react-router-dom'
import Mainpage from './Mainpage'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Navbar from './Navbar'
import './landing.css'

const Landing = () => {
    return (
        <div>
            <Navbar />
            <Mainpage />
        </div>
    )
}

export default Landing
