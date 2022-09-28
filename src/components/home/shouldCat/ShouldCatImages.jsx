import React from 'react'

import images1 from '../../../assets/image 1.png'
import images2 from '../../../assets/image 2.png'
import images3 from '../../../assets/image 3.png'

const ShouldCatImages = () => {
    return (
        <div className='should_cat__images'>
            <div className="should_cat__images_column">
                <img src={images2} alt="" order="2"  />
                <img src={images1} alt="" order="1"  />
            </div>
            <div className="should_cat__images_column">
                <img src={images3} alt="" order="3" />
            </div>
        </div>
    )
}

export default ShouldCatImages