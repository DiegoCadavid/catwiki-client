import React from 'react'
import { useNavigate } from "react-router-dom";

import icon from '../../assets/CatwikiLogo.svg'
import './Header.css'


const Header = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/')
  }

  return (
    <div className='header'>
        <img src={icon} alt="icon catWiki" onClick={handleClick} />
    </div>
  )
}

export default Header