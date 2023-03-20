import React from 'react'
// import { images } from '../../constants'
import { SubHeading } from '../../components'
import './Header.css'

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading title='Chase the new Flavour' />
      </div>
    </div>
  )
}

export default Header
