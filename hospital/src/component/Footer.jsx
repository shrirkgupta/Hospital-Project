import './Footer.css'
import React from 'react'

export default function Footer() {
    return (
        <div className='footer'>

            <div className='upper'><img src="https://cdn.pixabay.com/photo/2013/07/12/17/47/medic-152458_640.png" alt="" /></div>

            <div className='footertop'>
                <div className='footerbox'>
                    <h1>WellnessVista</h1>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolor! adipisicing elit. Facilis, dolor!</h3>
                </div>
                <div className='footerbox'>
                    <h1>About Us</h1>
                    <h3>About</h3>
                    <h3>Service</h3>
                    <h3>Doctors</h3>
                </div>
                <div className='footerbox'>
                    <h1>Service</h1>
                    <h3>lap Test</h3>
                    <h3>Health check</h3>
                    <h3>Heard check</h3>
                </div>
            </div>

            <div className='footerdown'>
                <h1>@Copyright development by <span>champion programmer </span>! All right reserved </h1>
            </div>

        </div>
    )
}
