import React from 'react'

import FooterOverlay from '../../components/Footer/FooterOverlay'
import Newsletter from '../../components/Footer/Newsletter'
import './Footer.css'

const Footer = () => {
  return (
    <div className='app__footer section__padding'>
      <FooterOverlay />
      <Newsletter />
    </div>
  )
}

export default Footer
