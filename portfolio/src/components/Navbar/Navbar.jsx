import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
    <div className='n-wrapper'>
        <div className="n-left">
            <div className="n-name">Andrew</div>
            <span>Toggle</span>
        </div>
        <div className="rigth">
            <div className="n-list">
                <ul style={{listStyleType :'None'}}>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Testimonial</li>
                </ul>
            </div>
            <button className="contact_btn">Contact Us</button>
        </div>
    </div>
  )
}
