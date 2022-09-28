import React from 'react'
import icon from '../../assets/CatwikiLogo.svg'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <img src={icon} alt="icon catwiki" />
            <p> created by <a> Diego Cadavid </a> - devChallenge.io 2021 </p>
        </div>
    )
}

export default Footer