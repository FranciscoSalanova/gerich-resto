import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from '../../constants/images'
import './Navbar.css'

const Menu = () => (
  <>
    <li className='p__opensans'><a href="#home">Home</a></li>
    <li className='p__opensans'><a href="#pages">Pages</a></li>
    <li className='p__opensans'><a href="#contactus">Contact Us</a></li>
    <li className='p__opensans'><a href="#blog">Blog</a></li>
    <li className='p__opensans'><a href="#landing">Landing</a></li>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className='app__navbar-links'>
        <Menu />
      </ul>
      <div className='app__navbar-login'>
        <a href="#login" className='p__opensans'>Log in / Registration</a>
        <div />
        <a href="#login" className='p__opensans'>Book Table</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} cursor='pointer' onClick={() => {setToggleMenu(true)}} />
        {
          toggleMenu && (
            <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
              <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => {setToggleMenu(false)}} />
              <ul className='app__navbar-smallscreen_links'>
                <Menu />
              </ul>
            </div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar