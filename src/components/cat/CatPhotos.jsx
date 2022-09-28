import React from 'react'
import imgtest from '../../assets/image 2.png';

const CatPhotos = ({ images = []} ) => {
  return (
    <div className='cat__other_photos'>
      <h4> Other photos </h4>
      <div className="cat__other_photos_container">
        {
          images.map( (e , i) => {
            return <img key={`${e}i${i}`} src={e} alt="Cat photo" />
          })
        }
      </div>
    </div>
  )
}

export default CatPhotos