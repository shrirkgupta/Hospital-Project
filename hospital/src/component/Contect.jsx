import React from 'react'
import './Contect.css'
export default function Contect() {
  return (
    <div className='contect ' >
          
          <div className='contectright'>
            <img src="https://cdn.pixabay.com/photo/2021/11/20/03/16/doctor-6810750_640.png" alt="" />
          </div>
 

           <div className='contectleft'>

           <div className='emargencycall'>Emargency Call</div>

          <div className='contectNumber'>
            <a href="tel:+9140977313"  >Call Now Hospital:--  <img src="https://cdn-icons-png.flaticon.com/512/455/455705.png"  alt="" /></a>
            <br /><br />
            <a href="https://wa.me/9140977313" target='blank'>Hospital whatsapp:--<img src="https://static.vecteezy.com/system/resources/previews/021/495/946/original/whatsapp-logo-icon-free-png.png" alt="" /></a>
          </div>
          </div>
          
          <div className='map'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.0063664254913!2d80.85241872443831!3d26.83974981322413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bffad3ae9ecc5%3A0x6d292d9a2131e8a1!2sBudheshwar%2C%20Alamnagar%2C%20Rajajipuram%2C%20Lucknow%2C%20Uttar%20Pradesh%20226017!5e0!3m2!1sen!2sin!4v1725212689713!5m2!1sen!2sin" width="100%" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>

    </div>
  )
}
