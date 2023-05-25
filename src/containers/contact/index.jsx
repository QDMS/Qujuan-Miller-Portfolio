import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent'
import { MdContactSupport } from 'react-icons/md'

const Contact = () => {
  return (
    <section className='contact' id="contact">
      <PageHeaderContent
      headerText = "Contact"
      icon={<MdContactSupport size={40}/>}
      />
    </section>
  )
}

export default Contact