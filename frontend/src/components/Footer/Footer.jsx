import React, { useState } from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {

    const [menu,setMenu] = useState("Home");

  return (
    <div className='footer-display' id='footer-display'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.mzambhani_logo} alt="" className="logo" />
            <p>Mzambhani is for tech solutions to everyone who is need of our services at any time. We always ready to offer our help to you, simply reach out to us. </p>
            <div className="footer-social-icons">
                <img src={assets.facebook} alt="" />
                <img src={assets.twitter} alt="" />
                <img src={assets.linkedin} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <a href='#navbar' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</a> <br />
                <a href='#about-display' onClick={()=>setMenu("About")} className={menu==="About"?"active":""}>About</a> <br />
                <a href='#explore-services' onClick={()=>setMenu("Specialization")} className={menu==="Specialization"?"active":""}>Specialization</a>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+27 72 045 4490</li>
                <li>mzambhani@tech.com</li>
                <li>nhluvukoremember@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 © Mzambhani.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
