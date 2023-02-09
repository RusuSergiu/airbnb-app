import React from 'react'
import '../style.css'
import AirbnbLogo from '../images/airbnb-logo.png'

export default function Navbar() {
    return (
        <nav>
            <img src = {AirbnbLogo} alt = 'airbnb-logo' className = 'airbnb-logo' />
        </nav>
    )
}