import React from 'react'
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
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className='app__navbar-links'>
        <Menu />
      </ul>
      <div></div>
      <div></div>
    </nav>
  )
}

export default Navbar