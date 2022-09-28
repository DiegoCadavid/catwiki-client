import React from 'react'
import testimg from '../../../assets/image 1.png'
import { useNavigate } from 'react-router-dom'

const DiscoverImageItem = ({ imageUrl = "", name = "", id = "" }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/cat/${id}`);
  }

  return (
    <div className='discover__image_item' onClick={handleClick} >
        <img src={imageUrl} alt={name} />
        <p>{ name }</p>
    </div>
  )
}

export default DiscoverImageItem