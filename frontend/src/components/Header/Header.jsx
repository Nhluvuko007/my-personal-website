import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='header'>
    <div className='header-contents'>
      <h2>Mzambhani Tech Solutions for you!</h2>
      <p>We offer you nothing but the best tech services or solutions ever here at Mzambhani. With our workaholics teams dedicated to fulfill whatever you in need of at any time you need it, Interested to know more of us scroll down to get to know us better.</p>
      </div>

      <div class="main__img--container">
        <img src={assets.header} alt="pic" id='main__img' />
      </div>

    </div>
  )
}

export default Header
