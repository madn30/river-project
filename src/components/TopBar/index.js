import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import './topbar.css'
const TopBar = () => {
  return (
    <div className='wrapper'>
      <GiHamburgerMenu  color='#0158a4' size={25}/>
    </div>
  )
}

export default TopBar