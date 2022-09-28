import React from 'react'
import ShouldCatImages from './ShouldCatImages'
import ShouldCatInfo from './ShouldCatInfo'

import './shouldCat.css'

const ShouldCat = () => {
  return (
    <div className='should_cat'>
      <ShouldCatInfo />
      <ShouldCatImages />
    </div>
  )
}

export default ShouldCat