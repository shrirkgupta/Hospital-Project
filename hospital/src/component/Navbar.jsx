import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import logo from '../assets/logo.png'
import { FiAlignJustify } from "react-icons/fi";

export default function Navbar() {

    let [open,setclose]=useState(true)
 
    return (
         

        
        <nav>
       <Link to='/'> <div class="logo">
            <img className='h-[50px]' src="https://cdn.pixabay.com/photo/2013/07/12/17/47/medic-152458_640.png" alt="" />
        </div></Link>
        <ul className= 'mainnav'>
            <Link to='/about'><li>About</li></Link>
            <Link to='/appointment'><li>appointment</li></Link>
            <Link to='/contect'><li>Contect</li></Link>
        </ul>
        <ul className= {`${open ?'phonenav':''} flex `}>
            <Link to='/about'><li>About</li></Link>
            <Link to='/appointment'><li>appointment</li></Link>
            <Link to='/contect'><li>Contect</li></Link>

        </ul>
        <div ><FiAlignJustify className="menu-icon" onClick={()=>setclose(!open)} /></div>
     </nav>
    )
}
