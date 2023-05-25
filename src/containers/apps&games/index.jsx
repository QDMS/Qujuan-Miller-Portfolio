import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent'
import { IoApps } from "react-icons/io5"
import { CgGames } from "react-icons/cg"

const AppsGames = () => {
  return (
    <section className='appsgames' id="appsgames">
      <PageHeaderContent 
      headerText = "Apps & Games"
      icon={<IoApps size={40}/>}
      icon1={<CgGames size={40}/>}
      />
    </section>
  )
}

export default AppsGames