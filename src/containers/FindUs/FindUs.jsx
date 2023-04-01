import React from 'react'

import './FindUs.css'

import SubHeading from '../../components/SubHeading/SubHeading'
import images from '../../constants/images'

const FindUs = () => {
  return (
    <div className='app__wrapper app__bg section__padding' id='findus'>
      <div className='app__wrapper_info' style={{ margin: '0 0 0 4rem' }}>
        <SubHeading title='Contact' />
        <h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>Find Us</h1>
        <div className='app__wrapper-content'>
          <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
          <p className='p__cormorant' style={{ color: '#DCCA87', margin: '2rem 0 1rem 0' }}>Opening Hours</p>
          <p className='p__opensans' style={{ margin: '1rem 0' }}>Mon - Fri: 10:00 am - 02:00 am</p>
          <p className='p__opensans' style={{ margin: '0 0 3rem 0' }}>Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button type='button' className='custom__button'>Visit Us</button>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.findus} alt='find us' />
      </div>
    </div>
  )
}

export default FindUs
