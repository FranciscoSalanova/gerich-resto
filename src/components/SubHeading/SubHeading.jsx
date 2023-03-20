import React from 'react'
import images from '../../constants/images'

const SubHeading = ({ title }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <p className='p__cormorant'>{title}</p>
      <img src={images.spoon} alt='spoon' className='spoon__img' />
      <h1 className='app__header-h1'>The key to Fine dining</h1>
    </div>
  )
}

export default SubHeading
