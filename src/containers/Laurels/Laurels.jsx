import React from 'react'

import './Laurels.css'

import SubHeading from '../../components/SubHeading/SubHeading'
import images from '../../constants/images'
import data from '../../constants/data'

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt='award' />
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{ color: '#DCCA87' }}>{title}</p>
      <p className='p__opensans' style={{ color: '#AAAAAA' }}>{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => {
  return (
    <div className='app__bg app__wrapper section__padding' id='awards'>
      <div className='app__wrapper_info'>
        <SubHeading title='Awards & recognition' />
        <h1 className='headtext__cormorant'>Our Laurels</h1>
        <div className='app__laurels_awards'>
          {
            data.awards.map((award, index) => (
              <AwardCard award={award} key={award.title + index} />
            ))
          }
        </div>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.laurels} alt='laurels' />
      </div>
    </div>
  )
}

export default Laurels
