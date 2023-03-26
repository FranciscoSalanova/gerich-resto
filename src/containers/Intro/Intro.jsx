import React from 'react'
import './Intro.css'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import index from '../../constants/index'

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false)
  const vidRef = React.useRef()

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)

    if (playVideo) {
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
  }

  return (
    <div className='app__video'>
      <video
        src={index.meal}
        type='video/mp4'
        ref={vidRef}
        loop
        controls={false}
        muted
      />
      <div className='app__video-overlay flex__center'>
        <div className='app__video-overlay_circle flex__center' onClick={handleVideo}>
          {
            (playVideo)
              ? <BsFillPlayFill color='#FFF' fontSize={30} />
              : <BsPauseFill color='#FFF' fontSize={30} />
          }
        </div>
      </div>
    </div>
  )
}

export default Intro
