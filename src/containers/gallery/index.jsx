import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent'
import { TfiGallery } from 'react-icons/tfi'
import ThreeDDesignGallery from './DesignGallery'
import './styles.scss'



const Gallery = () => {
  return (
    <section className='gallery' id="gallery">
      <PageHeaderContent 
      headerText = "Design Gallery"
      icon={<TfiGallery size={40}/>}
      />
      <>
      <h1 style={{ textAlign: "center", padding: 20, fontSize: 50, fontWeight: 700, letterSpacing: 1.5, lineHeight: 1, textTransform: "capitalize", color: "var(--selected-theme-main-color)", position: "relative", flex: 1}}>Check Out My Designs</h1>
      </>
      <ThreeDDesignGallery />
    </section>
  )
}

export default Gallery