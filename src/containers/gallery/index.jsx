import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent'
import { TfiGallery } from 'react-icons/tfi'

const Gallery = () => {
  return (
    <section className='gallery' id="gallery">
      <PageHeaderContent 
      headerText = "3D & Design Gallery"
      icon={<TfiGallery size={40}/>}
      />
    </section>
  )
}

export default Gallery