import React from 'react'
import { Link } from 'react-router-dom'


const DiscoverSlogan = () => {
    return (
        <div className='discover__slogan'>
            <h2>66+ Breeds For you <br /> to discover</h2>
            <Link to="most"> SEE MORE <span className="material-symbols-outlined"> arrow_right_alt </span> </Link>
        </div>
    )
}

export default DiscoverSlogan