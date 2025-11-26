import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu,setMenu] = useState(" ");
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div className='navbar' id='navbar'>
      <Link to='/'><img src={assets.mzambhani_logo} alt="" className="logo" /></Link>

      <button className={`hamburger-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-expanded={isOpen} aria-controls="navbar-menu">
      <div className="bar bar1"></div>
      <div className="bar bar2"></div>
      <div className="bar bar3"></div>
      </button>

      <ul id="navbar-menu" className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href='#explore-services' onClick={()=>setMenu("Specialization")} className={menu==="Specialization"?"active":""}>Specialization</a>
        <a href='#about-display' onClick={()=>setMenu("About")} className={menu==="About"?"active":""}>About</a>
        <a href='#footer-display' onClick={()=>setMenu("Contacts")} className={menu==="Contacts"?"active":""}>Contacts</a>
      </ul>
    </div>
  )
}

export default Navbar