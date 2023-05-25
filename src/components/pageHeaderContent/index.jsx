import React from 'react'
import './styles.scss'

const PageHeaderContent = (props) => {
    const {headerText, icon, icon1} = props;
  return (
    <div className='wrapper'>
        <h2>
{headerText}
        </h2>
        <span>{icon} {icon1}</span>
    </div>
  )
}

export default PageHeaderContent