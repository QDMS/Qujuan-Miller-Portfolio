import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent'
import { ImFilm, ImVideoCamera } from 'react-icons/im'
import VideoPlayer from './videoPlayer'

const Videos = () => {
  return (
    <section className='gallery' id="gallery">
      <PageHeaderContent
      headerText = "Film & Videos"
      icon={<ImFilm size={40}/>}
      icon1={<ImVideoCamera size={40}/>}
      />
      <VideoPlayer
      
      />
    </section>
  )
}

export default Videos