import React from 'react'
// import { Outlet } from 'react-router-dom'
import Navbar from './component/Navbar'
import About from './component/About';
import Appointment from './component/Appointment';
import { Route, Routes} from 'react-router-dom';
import Contect from './component/Contect';
import Hero from './component/Hero';
import Footer from './component/Footer';

export default function App() {



  return (
    <div>
      <Navbar/>
      
    <Routes>
     <Route path='/' element={<Hero/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/Appointment' element={<Appointment/>}/>
     <Route path='/contect' element={<Contect/>}/>
     

    </Routes>
    <Footer/>

    
    </div>
  )
}






